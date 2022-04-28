# PT skripty
PT skripty jsou mnohem mocnější než IoT. V PT skriptech totiž můžeme využít mnohem více funkcí, které komunikují s PT pomocí IPC. Teoreticky je možné pomocí IPC komunikovat přímo s PT i z vlastních aplikací a i přestože i k samotnému IPC také není dokumentace, je možné využít tuto dokumentaci, protože je nám poskytnutý JS jen takový wrapper kolem IPC.

# Přehled
PT skripty jsou moduly. Menu, které nás zajímá je "Extensions > Scriptning" a konkrétně v něm je pro nás podstatný hlavně (alespoň pro mě) "Edit File Script Module". To nám otevře dialog PT skriptu pro současně otevřený PT soubor/uložení.

Tento dialog začíná na přehledu, ale nás zajímá primárně záložka "Script Engine", kde se nachází/budou nacházet naše JS soubory. Z této záložky můžeme i skripty spouštět a otevřít debugovací konzoli (k té ale až za chvíli).

# Dokumentace
Podobně jako u IoT, tak i zde jsem vytvořil `.d.ts` soubory obsahující funkce, třídy a proměnné, které lze použít. Pro postup, jak soubor užít, viz [povídání o Declaration Files](../Declaration%20files.md).

Existuje zde několik definičních souborů:
- `script modul.d.ts` - definice dostupné v modulech
- `webview.d.ts` - definice dostupné ve webview
- `analyzer.d.ts` - výstup `analyzer.py`
- `manual.d.ts` - vstup pro `analyzer.py`

Pokud chceš přidat nějaké docstringy, tak to proveď v `manual.d.ts` a spusť `analyzer.py` (nebo rovnou uprav i `analyzer.d.ts`).

Vytváření této dokumentace byla čistá bolest, protože prakticky vše, co v těchto definičních souborech je, jsem musel zjistit sám. K tomu posloužili 2 mnou vytvořené pomocné skripty: `extractor.js` a `analyzer.py`. Oficiální dokumentace (k celému PT) je dostupná v souboru `$CESTA_K_PT$/help/default/index.htm` a ohledně tohoto tématu je zde sekce "Script Modules", kterou doporučuji projít. Oficiální dokumentace poskytuje přehled o tom, jak moduly fungují, zatímco tento projekt je primárně o poskytnutí reference pro funkce, které lze v rámci skriptů použít.

## `extractor.js`
`extractor.js` byl první pomocník, ale v tuto chvíli jsou již jeho úspěchy nahrazeny jeho nástupcem (`analyzer.py`). Je ale ponechán, protože jsem si téměř jist, že existuje/bude existovat situace, kdy nástupce nebude stačit. Obsah souboru `extractor.js` se zkopíroval a vložil do debugovací konzole PT skriptu a následně vyhodil rozsáhly JSON soubor se všemi dostupnými funkcemi (rekurzivně zkoušel jednotlivé metody na získaných objektech a dokonce zkoušel volat i funkce s parametry). Tento JSON soubor lze pak zpracovat a na jeho základě vygenerovat `.d.ts` soubor. Bohužel se tímto způsobem nedali zjistit typy argumentů a dokonce ani počet argumentů funkcí a chyběli eventy.

V PT skriptech lze totiž registrovat na objektech eventy. Naneštěstí registrace probíhá přes jednotnou funkci, která bere název eventu, a tyto názvy eventů nejsou nikde zaznamenány.

## `analyzer.py`
`analyzer.py` je prográmek, který opravil nedostatky původního `extractor.js`. Někde na internetu jsem totiž při hledání již existující dokumentace narazil na soubor `ptaplayer-XX.YYY.jar` (nacházející se ve složce `$CESTA_K_PT$/extensions/ptaplayer`). Tento Java archiv obsahuje totiž (alespoň část) implementace IPC v PT a jelikož objekt dostupný v rámci JS API v PT skriptech komunikuje přímo přes IPC, tak lze tento archiv dekompilovat a zjistit existující funkce, eventy a enumy/výčty.

`analyzer.py` tedy vezeme dekompilovaný ptaplayer, zanalyzuje ho a z analyzovaných dat vygeneruje `.d.ts` soubor. K tomu ještě bere v potaz `manual.d.ts`, který obsahuje námi definované věci navíc a pokud najde konflikty, tak se je pokusí spojit.

Samotný dekompilovaný ptaplayer zde přiložen není, protože hádám, že by s tímto byli akorát problémy a dekompilovat ho sám není těžké.

# Základ
Při spuštění modulu se vykoná funkce `main()` a je jedno, v jaké souboru se nachází. Podobně jako u IoT, tak i zde můžeme funkci `main()` ignorovat a kód psát mimo jakoukoliv funkci.

Většina funkcionality je dostupná přes objekt `ipc`. Zde ale narazíme na oprávnění, které jsou v modulech řešeny a pro přístup k tomuto objektu je potřeba povolit (minimálně) "IPC" oprávnění (záložka "General"), ale nejspíše skončíš u povolení všeho (minimálně ještě "Get/Change Network Info").

# Poznatky
Upřímně zde nemám moc, co bych napsal, protože většina úsilí šla do vytváření a dokumentování `.d.ts` souborů, ale i přesto zde něco napsat zkusím.

## JS
Nám zde dostupný JS není tak hrozný jako u IoT, protože to vypadá, že splňuje alespoň ES6 (2015) standard. Sice pořád nemáme např. `class` keyword, ale bez toho se obejdeme.

## Debugovací konzole
Toto je mocný nástroj, protože je to vážně debugger. Dokonce i zobrazuje tracebacky u chyb (ne jako u IoT) a můžeme nastavit i breakpointy. Navíc obsahuje i konzoli, kam můžeme psát příkazy, které se ihned vykonají.

Ale ukládej často, protože debugovací konzole může snadno zablokovat celý PT. Když totiž nastavíš blbý breakpoint, který se vykonává neustále, lze se dostat do situace, kdy budeš nucen(a) zavřít PT natvrdo - konzole totiž nedovolí při zastaveném průběhu programu nic udělat (ani odstranit breakpoint).

## Interakce
Interakce! Čas na srandu...

### Přístup k jednotlivým prvkům
Pokud chceme manipulovat s jednotlivými prvky, můžeme postupovat takto:
```js
var network = ipc.network();
var deviceCount = network.getDeviceCount();
while (deviceCount--) {
    var device = network.getDeviceAt(deviceCount);
    console.log(device.getObjectUuid());
}
```

### Vstup
Vstup je problém a asi jediná možnost je pozice prvků (`device.getXCoordinate()` a `device.getYCoordinate()`). Můžeš také brát textový vstup skrze název prvků.

Teoreticky je možné nějak vymyslet propojení PT skriptů a IoT, aby si měl k dispozici i (limitovaný) vstup myši.

### Výstup
Výstup je na druhou stranu jednoduchý. Jednoduše lze pohybovat jednotlivými prvky (`device.moveToLocation()`) a jednoduše generovat i text přes `ipc.appWindow().getActiveWorkspace().getLogicalWorkspace().addNote()`.

Jednotlivé prvky i vytvářet, ale k tomu jsem se nedostal, takže musíš experimentovat sám. Stejně tak lze přehrávat i zvuky a opět zmíním, že pokud něco v PT skriptech chybí, ale nachází se to v IoT, tak teoreticky lze tyto 2 světy nějak propojit.
