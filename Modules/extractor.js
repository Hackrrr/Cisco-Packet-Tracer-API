///@ts-check

/** @type {Object.<string, {className: string, ownProperties: string[], ownKeys: string[], object: object,via: [object, string]}>} */
var output = {};

/** @type {[object, string][]} */
var toExtract = [
    [null, "ipc"],
    [null, "ipc.appWindow()"],
    [null, "ipc.ipcManager()"],
    [null, "ipc.commandLog()"],
    [null, "ipc.hardwareFactory()"],
    // [null, "ipc.multiUserManager()"],
    [null, "ipc.network()"],
    [null, "ipc.options()"],
    [null, "ipc.simulation()"],
    [null, "ipc.systemFileManager()"],
    [null, "ipc.userAppManager()"],
    // [null, "scriptEngine"],
];
var uuids = [];
var blacklist = ["Environment"];
var limited = ["File", "Directory", "EnvironmentKeyframe"];
var limitedDone = [];

function JSONcompare(x, y) {
    return JSON.stringify(x) == JSON.stringify(y);
}
/**
 * @param {string} string
 * @param {string} prefix
 */
function startsWith(string, prefix) {
    return string.substr(0, prefix.length) == prefix;
}
/**
 * @param {string} string
 * @param {string} suffix
 */
function endsWith(string, suffix) {
    return string.substr(string.length - suffix.length) == suffix;
}

/**
 * @param {[any, string]|null} targetData
 */
function cycle(targetData) {
    if (targetData === null && !toExtract.length) return;

    // Vybereme další věc na extrakci
    var currentExtractRecord = targetData === null ? toExtract.pop() : targetData;
    if (currentExtractRecord == undefined) {
        console.log("Nic dalšího k analýze")
        return;
    }
    console.log("Analyzuji '" + currentExtractRecord[1] + (currentExtractRecord[0] == null ? "'" : ("' na třídě '" + currentExtractRecord[0].getClassName() + "'")));


    // Zkusíme něco získat
    try {
        var current = currentExtractRecord[0] == null ? eval(currentExtractRecord[1]) : eval("currentExtractRecord[0]." + currentExtractRecord[1]);
    } catch (e) {
        console.log("Nepodařilo se získat objekt, přeskakuji");
        return;
    }
    // Zkontrolujeme, zda jsme dostali objekt
    if (typeof current != "object") {
        console.log("Nevrátil se objekt, přeskakuji");
        return;
    }
    if (current == null) { // Ano, zapomněl jsem na tenhle JS null pitfall LULW
        console.log("Vrátilo se 'null', přeskakuji");
        return;
    }
    // Pokud objekt nemá "getClassName()", tak se děje něco divného, protože voodoo,
    // které provozuje Packet Tracer, by tohle mělo zajistit (téměř) vždy
    // Pokud má objekt "getClassName()", měl by mít i "._parser.uuid"
    if (typeof current.getClassName != "function") {
        console.log("Objekt nemá metodu `getClassName()`, přeskakuji");
        return;
    }
    if (uuids.indexOf(current._parser.uuid) != -1) {
        console.log("Objekt byl již analyzován v minulosti, přeskakuji");
        return;
    }

    // Pokud je třída na blacklistu, přeskakujeme
    if (blacklist.indexOf(current.getClassName()) != -1) {
        console.log("Třída '" + current.getClassName() + "' je na black listu, přeskakuji");
        return;
    }
    // Pokud je třída limited a již jsme analyzovali, přeskakujeme
    if (limited.indexOf(current.getClassName()) != -1 && limitedDone.indexOf(current.getClassName()) != -1) {
        console.log("Třída '" + current.getClassName() + "' je limitována, přeskakuji");
        return;
    }

    var currentOutput = {
        className: current.getClassName(),
        ownProperties: [],
        ownKeys: Object.keys(current),
        object: current,
        via: currentExtractRecord
    };
    /** @type {any} x */
    var x;
    // Extrahujeme vlastnosti
    for (x in current) currentOutput.ownProperties.push(x);

    // Zkontrolujeme, zda náhodou se nestalo něco hodně divného a nemáme nějakým způsobem
    // jiné vysledky, než minule
    if (currentOutput.className in output) {
        if (!JSONcompare(output[currentOutput.className].ownProperties, currentOutput.ownProperties)) {
            console.log("Neshodují se vlastnosti objektů se stejným className:");
            console.log("===== První =====");
            console.log(output[currentOutput.className].ownProperties);
            console.log("===== Druhý =====");
            console.log(currentOutput.ownProperties);
            console.log("Ukončuji extrakci");
            throw new Error();
        }
    }


    // Extrakce dokončena, nyní vybereme kandidáty pro pokračování
    for (var candidate in currentOutput.ownProperties) {
        // Protože v JS vrací "in" pro array indexy
        candidate = currentOutput.ownProperties[candidate];


        // př. getDeviceAt(...)
        var result = /^get(\w*)At$/.exec(candidate);
        if (result != null) {
            if (("get" + result[1] + "Count") in currentOutput.ownProperties) {
                x = eval("current.get" + result[1] + "Count()");
            } else if (("get" + result[1] + "sCount") in currentOutput.ownProperties) {
                x = eval("current.get" + result[1] + "sCount()");
            } else {
                x = 10;
            }
            while (x--) toExtract.push([current, candidate + "(" + x + ")"]);
        }

        // př. getLink()
        // if (/^get(\w*)(?<!At)$/.test(candidate)) { // JS/RegEx engine, co je k dispozici, nepodporuje look-behind
        // if (candidate.startsWith("get") && !candidate.endsWith("At")) { // JS engine, co je k dispozici, nepodporuje startsWith()/endsWith()
        if (startsWith(candidate, "get") && !endsWith(candidate, "At")) toExtract.push([current, candidate + "()"]);
    }


    // Uložíme výsledek a pokračujeme
    if (limited.indexOf(current.getClassName()) != -1) limitedDone.push(current.getClassName());
    output[currentOutput.className] = currentOutput;
    uuids.push(current._parser.uuid);
    return currentOutput;
}

function handler() {
    if (toExtract.length) {
        cycle(null);
        setTimeout(handler, 1);
    } else {
        console.log("Vše dokončeno");
    }
}
setTimeout(handler, 1);

function generateCode() {
    var out = "";
    for (var x in output) {
        var y = output[x];
        out += "declare class _" + y["className"] + " extends BaseClass {\n";
        for (var x in y["ownKeys"]) {
            if (x == "getClassName" || x == "getObjectUuid" || x == "registerEvent" || x == "unregisterEvent" || x == "registerDelegate" || x == "unregisterDelegate" || x == "registerObjectEvent" || x == "unregisterObjectEvent")
                continue;
            out += "    " + x + "(..._: unknown[]): unknown;\n";
        }
        out += "}\n"
    }
    return out;
}

