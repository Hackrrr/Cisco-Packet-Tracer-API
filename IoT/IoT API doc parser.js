
// let tables = document.getElementsByTagName("tbody");


let return_type_mapping = {
    "n/a": "void",
    "": "void",
    "bool": "boolean",
    "int": "number",
    "float": "number",
    "str": "string",
    "array of file": "File[]",
    "array of string": "string[]",
}

let output = `
declare const INPUT = 0;
declare const OUTPUT = 1;
declare const LOW = 0;
declare const HIGH = 1023;
declare const A0 = 6;
declare const A1 = 7;
declare const A2 = 8;
declare const A3 = 9;
`;

let lastParrent = "";
let inClass = false;
let scope = "";
let entries = document.querySelectorAll("tbody tr:not(:first-child):not(:nth-child(2))");
for (let entry of entries) {
    let p = entry.parentElement.children[0].innerText.trim();
    let f = entry.children[0].innerText.trim();
    let r = entry.children[1].innerText.trim();
    let d = entry.children[2].innerText.trim();
    let e = entry.children[3].innerText.trim();

    if (f == "") continue;
    if (f == "Short-hands without creating a RealHTTPClient") continue;
    f = f.split("(SBC only)").join("");

    if (f.endsWith(";")) f = f.substr(0, f.length - 1);
    f = f.split("-").join("_").split(/\s*\(\s*/).join("(").split(/\s*\)\s*/).join(")");
    d = d.split("“").join("\"").split("”").join("\"");
    e = e.split("“").join("\"").split("”").join("\"");

    r = return_type_mapping[r.toLowerCase()] ?? r;
    
    let prefix = "";
    let declaration;
    if (lastParrent != p) {
        if (inClass || scope != "")
            output += "}\n";
        output += `\n\n// ${p}\n`;
        inClass = false;
        lastParrent = p;
        scope = "";
    }
    if (f.endsWith("class")) {
        if (inClass || scope != "")
            output += "}\n";
        scope = "";
        inClass = true;
        declaration = `declare interface ${f.substr(0, f.length - 6)} {\n`;
    } else if (f.includes("new ")) {
        if (inClass || scope != "")
            output += "}\n";
        scope = "";
        inClass = true;
        prefix = "    ";
        output += `declare class ${f.match(/(?<=new )\w+(?=\()/)} {\n`;
        declaration = `${prefix}constructor${f.match(/\(.+\)/) ?? "()"};`;
    } else {
        if (!f.endsWith(")"))
            f += "()";
        if (f.includes(".")) {
            prefix = "    ";
            let splitted = f.split(".");
            if (splitted[0] != scope) {
                output += `${inClass || scope != "" ? "}\n" : ""}declare namespace ${splitted[0]} {\n`;
                scope = splitted[0];
                inClass = false;
            }
            declaration = `${prefix}function ${splitted[1]}: ${r};`;
        } else {
            output += `${scope == "" ? "" : "}\n"}`;
            declaration = `${inClass ? "    " : "declare function "}${f}: ${r};`;
            scope = "";
            if (inClass) prefix = "    ";
        }
    }
    output += `${prefix}/**\n${prefix} * ${d.split(/(?:\r\n)|\n|\r/).join(`\n${prefix} * `)}\n`;
    if (e != "") {
        output += `${prefix} * @example\n${prefix} * ${e.split(/(?:\r\n)|\n|\r/).map(x => x.trimEnd()).filter(x => x !== "").join(`\n${prefix} * `)}\n`;
    }
    output += `${prefix} */\n${declaration}\n`;
}
console.log(output);