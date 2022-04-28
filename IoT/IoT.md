# IoT JS
V úvodu ses dočetl(a), jak otevřít Pandořinu skřínku s programováním pomocí IoT prvků a zde si ukážeme, jak uniklé zlo zkrotit a použít v náš prospěch.

# Dokumentace
Nutno uznat, že dokumentace k IoT JS API užitečná je. Ale několik věcí chybí a vyskytuje se zde i několik nepřesností. Dokumentace se nachází v souboru `$CESTA_K_PT$/help/default/iot_javascript_api.htm` (platí pro PT verzi 8.0.1). Stejně jako u PT skriptů, tak i zde jsem vytvořil `.d.ts` (= `iot.d.ts`) soubor obsahující funkce, třídy a proměnné, které lze použít. Pro postup, jak soubor užít, viz [povídání o Declaration Files](../Declaration%20files.md).

Pro základní generaci `iot.d.ts` souboru jsem vytvořil a použil [JS skriptík](IoT%20API%20doc%20parser.js), který vytvořil základní strukturu. Pokud si ho chceš spustit sám/sama, tak ho celý zkopíruj a vlož do JS konzole při otevřené originální dokumentaci. Není perfektní a jeho výsledek je pro plnohodnotné použitý nutné manuálně doupravit. Naneštěstí ten ňouma (= já), co ho psal, zapomněl průběžně komentovat a ke všemu vybíral jména proměnných zřejmě náhodně z písmenek v abecedě, takže pokud někdy strukturu stránky s dokumentací upraví, tak pravděpodobně budeš napsat takový skript od znova.

# Poznatky
Tak teď něco k tomu, jak vlastně napsat něco vlastního...

## Základ
Základní program by měl (dle dokumentace) vypadat takto:
```js
function setup() {
    // Kód vykonaný jednou při spuštění
}
function loop() {
    // Neustále se vykonávající kód
}
```
Ukázalo se ale, že funkce `setup()` může být vypuštěna a umístit inicializační kód úplně mimo jakoukoliv funkci.

Navíc je zde problém, že mezi jednotlivými spuštěními funkce `loop()` je značná prodleva. Naštěstí můžeme `loop()` funkci zahodit:
```js
var tickDelay = 10;

function tick() {
	console.log(x++);
}

while (true) {
	tick();
	delay(tickDelay);
}
```
Takto dokážeme vykonat kód mnohem častěji, a pokud zde bude volání funkce `delay()`, tak je PT i relativně stabilní a neseká se. Dokonce můžeme nastavit `tickDelay` na hodnotu `0` a PT stále poběží, ale dělat to nedoporučuji, jelikož se již drobné záseky vyskytnout mohou a stejně pravděpodobně takovou frekvenci nepotřebuješ.

## JS
JS, který máme k dispozici, je něco, co má k modernímu JS hodně daleko. Při psaní kód si budeš pravděpodobně přát, abys radši psal(a) JS pro zastaralý IE než pro tohle, protože to, co je k dispozici, není ani kompletní ECMAScript 5 standard... Jinak řečeno - 90% věcí, co jsem chtěl použít (resp. co normálně používám), tak zde není.

Nehledě na to, že tento JS engine, který je nejspíše podomácku vyrobený, ani nefunguje tak jak by měl - jako příklad vezmu keyword `delete`.

### `delete`
```js
var obj = {};
obj["odpoved"] = 42;
// Používá se JSON.stringify(), protože jinak se zobrazí pouze "[object]"
console.log(JSON.stringify(obj));   // Výsledek: {"odpoved":42}
delete obj["odpoved"];              // Výsledek: true
console.log(JSON.stringify(obj));   // Očekávaný výsledek: {}
```
~~Ano, uhádl(a) jsi! Tohle v PT nefunguje! Místo toho druhý `console.log` vyplivne to samé, co první. Bezva...~~
Ok, ukazuje se, že tento jednoduchý příklad funguje. Ale jsem si zcela jist, že mi `delete` keyword nefungoval. Opravdu jsem strávil několik hodin debugováním, abych nakonec zjistil, že `delete` nefunguje a následně jsem strávil i nemalé množství času, kdy jsem studoval, jak přesně `delete` funguje a došel jsem k závěru, že v PT `delete` nefunguje. Pokud tedy někdy narazíš na problém, který zdánlivě nemá existovat, zkus si ověřit, zda `delete` skutečně funguje.

Chápu, že i pokud používáš JS denně, tak jsi třeba o `delete` ani nezavadil(a), ale jedná se o základ. Ale jednoho dne zjistíš, že je to něco, co chceš mít k dispozici. A náhrada se dělá blbě - jediná možnost je iterovat skrz původní objekt a zkopírovat všechny klíče (krom toho, co chceš vymazat) do nového. Jak ti ale možná došlo, vzniká tady několik problémů:
- Výkon - Prakticky se jedná o iteraci navíc, protože reálně by vůbec neměla být zapotřebí
- Reference - Vytváříme nový objekt a starého se nedotkneme, takže pokud jsme objekt předtím sdíleli do jiných částí kód, tak tam pořád existuje původní (neupravená) varianta

Nyní si říkáš, že by se to dalo vyřešit dosazením `null` nebo `undefined`. To přeci i v tak obskurním JS enginu existovat musí, že? Že? Ano, existuje a ano, teoreticky je to řešení... alespoň do chvíle, když už tyto hodnoty neznamenají v tvém objektu něco jiného. Ale při tomto řešení nebude fungovat toto:
```js
var obj = {
    "odpoved": 42
};
obj["odpoved"] = undefined;         // delete obj["odpoved"];
console.log("odpoved" in obj);      // Chtěný výsledek: false
```

### Další nekalosti
Nám dostupný JS engine je, jak již bylo zmíněno, bolest. Chybí zde spousta věcí, které se běžně používají (resp. které já při JS používám).

Chybí například arrow funkce, `let`/`const` nebo `class`. Arrow funkce nahradíme jednoduše, protože jednoduché anonymní funkce naštěstí fungují (`function(){ ... }`). Bez `let`/`const` se tak nějak také obejdeme. Definice tříd bez `class` je také možná, ale musíme ji uskutečnit za pomoci starého syntaxu:
```js
function MujObjekt(hodnota) {
    this.hodnota = hodnota;
}
MujObjekt.prototype.zobraz = function() {
    console.log(this.hodnota);
}

var obj = new MujObjekt(21);
obj.hodnota *= 2;
obj.zobraz();
```

Dalšími chybějícími funkcemi jsou `setTimeout()` a `setInterval()`. Také chybí věci jako je `Object.keys()` a `Object.values()` nebo `Array.prototype.splice()`.

Nakonec zmíním, že debugování je velice obtížné, poněvadž při chybě se nevypisuje traceback (ani řádka, na které došlo k chybě) a ze samotné chybové zprávy také užitečné nejsou. Většinu času debugování tedy ztratíš zkoumáním, kde přesně se chyba stala než tím, jak se chyba stala anebo jak ji opravit.

## Nouzové zastavení
Když už si hrajeme s kódem, který už skoro dokáže PT položit, bylo by dobré vědět, jak takový program zastavit (bez nutnosti vypnutí PT). Relativně snadno se totiž může stát, že zamrzne okno IoT prvku, přes které jsme (za normálních) okolností schopní kód zastavit a v tu chvíli musíme prvek zastavit jinak.

Jedna možnost je prvek odstranit, ale třeba tam máme kus kódu, který nemáme jinde a znovu ho psát nechceme. Druhá možnost je použít správce skriptů, který lze otevřít přes zkratku Ctrl+Shift+G nebo přes menu "Tools > Script Project Manger". Ve správci pak vybereme dané problematické zařízení a zmáčkneme "stop". Tento správce ukazuje i kolik si daný skript bere z "CPU" (ale netuším, co přesně zde znamená "CPU", protože reálné CPU to není).

Poslední možnost je samozřejmě vypnout PT natvrdo. Když PT zamrzne celý, nic jiného se dělat nedá.

## Interakce
Nyní interakce! To je ta část, kdy můžeme udělat nějaké šílenosti.

### Přístup k jednotlivým prvkům
Při psaní kódu máme k dispozici určité funkce, ale pokud chceme manipulovat s nějakým prvkem, tak pomocí nich dokážeme ovládat jen onen jeden IoT prvek, na kterém běží náš kód a to nám většinou nestačí. Naštěstí jde získat reference na ostatní prvky a v rámci možností je i ovládat.

Jedna možnost je volání funkce `devicesAt(0, 0, 4000, 4000)` (4000 je šířka a výška dostupného prostoru). Tím dostaneme všechny prvky. Teda teď kecám - dostaneme jen jejich názvy. S názvy prvků sice něco dokážeme, protože některé funkce operují s názvem prvku (třeba `getDeviceProperty()`), ale třeba získat jejich pozici nedokážeme.

Druhá a lepší možnost je `getLogicalObject().getParent()`. Takto získáme objekt pracovního prostoru (pokud prvek není v clusteru a pokud nevíš, co cluster v PT je, tak v něm prvek není). Přes tento objekt lze získat ostatní prvky:
```js
var workspace = getLogicalObject().getParent();
var pc2 = workspace.getChild("PC2");
console.log(pc2.getCenterX());
pc2.moveTo(10, 10);
```
Taková kulišárna je, že přes tuto druhou možnost nelze (jednoduše) získat názvy všech prvků. Pokud chceme iterovat skrze všechny prvky, tak buď musíme zkombinovat první a druhou možnost anebo spojit metody `.getChildCount()` a `.getChildAt()` (dostupné na `workspace` objektu).

### Vstup
Vstup do našeho programu lze udělat různě. Buď můžeme jako vstup brát pozici určitého prvku, nebo můžeme brát i textový vstup podle názvu prvků. Do jisté míry lze brát i pozici myši, ale ta je aktualizována pouze při stisku klávesy Alt.

Pro vstup myši lze vytvořit funkci `mouseEvent()`, která následně bude (automaticky) volána při změně pozice myši nebo při změně stavu stisknutí. Nevím, jestli funkce bude volána i v případě "zablokování" vykonávání při implementaci uvedené alternativy k `loop()` funkci, ale pokud ne, tak nevadí. Existují totiž proměnné `mouseX`, `mouseY` a `bMouseDown`, které obsahují identická data, jako ta, která by se vkládala jako argumenty pro funkci `mouseEvent()`.

Kulišárna s myší je ještě jedna. Jak zjistíš, tak i pokud držíš klávesu Alt, tak žádná data kód neobdrží. To je protože tyto data kód obdrží pouze tedy, když je myš nad (ikonou/obrázkem) prvku. Naštěstí lze snadno vytvořit prázdný (= průhledný) 4000x4000 pixelů velký obrázek a dosadit ho do prvku (záložka "Thing Editor" vedle záložky "Programming" v dialogu prvku). Takto budeme mít hodnoty z myši neustále (pokud je stisknuta Alt).

### Výstup
Výstup je v IoT těžší než v PT skriptech, protože nelze vyplivnout text (teda mimo konzole, ale tu budeš chtít mít asi skrytou). Na druhou stranu můžeme jednoduše vytvořit výstup z obrázků - pomocí kódu můžeme změnit obrázek našeho IoT prvku (= prvek, kde běží kód) na jiný (obrázky jsou ale "statické" (= musíme je nahrát manuálně) a nelze je tedy generovat za běhu). Buď pomocí změny průhlednosti (`setComponentOpacity()`) nebo pomocí pravidel. Pravidla lze nastavit opět v záložce "Thing Editor" - nastavíme třeba, že při hodnotě 5 na analogovém portu bude obrázek takový a při hodnotě 6 jiný. Hodnotu na portu pak lze změnit funkcí `analogWrite()`.

Další logická možnost výstupu je pohyb prvků v pracovním prostoru. Když je získáme (viz [část o jejich získávání](#přístup-k-jednotlivým-prvkům)), lze použít metody `.moveNĚCO()`. Pokud chceme konstantní pohyb, tak lze použít i metodu `.setVelocity()`. Nevýhoda oproti PT skriptu je zde ta, že nové prvky nelze vytvořit. Pokud se tedy chceme tvářit, že je vytvářet dokážeme, musíme jich vytvořit hromadu do zásoby, schovat je a až je budeme chtít "vytvořit", tak je zobrazíme.

Výstup můžeme realizovat i textem přes funkci `setCustomText()`, která ... no... asi od ní odpustíš, protože s textem nejde moc manipulovat. Jeho styl je pevně dán, stejně tak jeho velikost (která je dost malá). Navíc nelze text libovolně umístit, protože jeho plocha, na které se může zobrazit, je limitována velikostí obrázku našeho prvku. Tuto limitaci ale lze opět vyřešit 4000x4000 obrázkem.

Poslední možnost výstupu, kterou zde uvedu, je zvuk. Buď lze použít některé ze zvuků PT (ano, PT očividně zvuky má) anebo můžeme načíst svoje. Při načtení svých zvuků je ale problém přenositelnost, protože zvuky nemůžeme zaprvé jednoduše přenést a za druhé referencovat. Pro načtení zvuky totiž potřebujeme znát jeho cestu a relativní adresy použít nemůžeme. Všechny adresy jsou relativní k hlavní složce PT, ale můžeme použít známý trik pro LFI zranitelnosti, abychom měli možnost "absolutního" adresování (v rámci stejného disku, jako je složka PT):
```js
//         "Absolutní" cesta začíná zde ↓
var cesta = "/../../../../../../../../../Windows/Media/Windows Background.wav";
addSound("zvuk", cesta);
playSound(zvuk);
```
