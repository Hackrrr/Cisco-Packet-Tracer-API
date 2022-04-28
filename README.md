# Cisco Packet Tracer scripting API
Tento projekt obsahuje dokumentaci skriptovacího rozhraní pro Cisco Packet Tracer, protože ji nikdo jiný očividně zatím neudělal.

# Shrnutí
[Cisco Packet Tracer](https://www.netacad.com/courses/packet-tracer) (dále jen PT) je program pro simulaci sítě, především Cisco prvků. Ačkoli je to s ním někdy těžké, jedná se o poměrně pěkný prográmek, který i dobře slouží (za předpokladu, že má zrovna dobrou náladu). A "náhodou" jsem jednoho dne zjistil, že obsahuje i skriptovací rozhraní... Tak úplně "náhodou" to nebylo, ale celý příběh prozatím vypustím.

V tomto repozitáři jsem se tedy rozhodl předat moje poznatky ohledně programování v PT. Uvedu základy, jaké jsou možnosti, jak jsem získal informace, které nikde nejsou, také některé mé výtvory a další věci... Pokud tedy máš čas a chuť se ponořit do absurdit všech nástrah, které v PT při pokusech něco programovat čekají, tak já rád budu tvým průvodcem. :)

## Proč?
(Tuto část v lze v klidu přeskočit.)

"Ale vážně... Proč by si to vůbec dělal? Z jakého důvodu by si chtěl programovat v PT, v programu, kterým jsi nejspíše týrán na škole?"

Rád si hraju a neustále se snažím uskutečnit věci, které se mohou zdát nemožné... a programování v PT tak vypadalo... a nakonec se ukázalo, že to tak trochu nemožné je, a že tohle rozhodně není malá výzva. Když jsem se doslechl, že někdo kdysi udělal gravitaci a v odevzdaném úkolu (zadáním bylo vytvoření a konfigurace sítě) pak routery doslova padali, řekl jsem si, že to taky zkusím. Bohužel jsem to vzal za špatný konec a šel rovnou hledat na internet, jak do PT lze dostat kus kódu a výsledek byl, že jsem nic nenašel a vzdal to. Ovšem ne na dlouho a v jeden den (kdy jsem měl rozdělaných "jen" 4 další projekty) jsem se rozhodl, že PT pokořím a něco stvořím. Vykašlal jsem se na internet, vzal vše do vlastních rukou a začal prolézat PT skrz naskrz abych objevil nějakou šťavnatou skrytou funkcionalitu... a nakonec jsem našel - PT Script Modules (viz dále).

V tenhle moment to tak nějak začalo a i šel jsem dál i přes všechny předpoklady, že to nemá cenu...

# Základy
Skriptování v PT lze rozdělit do dvou hlavních částí: tzv. PT Script Modules (= Extensions) a IoT. Obě varianty mají svá pro a proti, ale obecně PT skripty jsou mnohem mocnější, ale IoT skriptování je jednodušší.

Obojí má prakticky nulovou dokumentaci. Abych byl upřímný, tak IoT část má dokumentaci, ale rozhodně bych neřekl, že je dobrá. PT skripty také mají dokumentaci (asi 4 sekce v nápovědě k PT (BTW věděl(a) jsi vůbec, že PT obsahuje i nápovědu?)), ale ta je naprosto nepoužitelná. Ok, není zrovna nepoužitelná - obsahuje vše okolo PT skriptů (jak e vytvořit, jak přesně fungují, jejich metadata, ...), ale jediná věc, která zde chybí (a která by pro ~~nás~~ mě byla zajímavá) je reference jednotlivých funkcí. Samotná dokumentace popisuje jen několik málo funkcí použitých v příklad a pak se odkazuje na [link](http://community.netacad.net/web/packet-tracer/files/-/document_library/view/226649), kde by se podle ní měla nacházet kompletní reference, ale ten, jak jsi už nejspíše zjistil(a), nefunguje. To je také jeden z důvodů, proč jsem tohle všechno vytvořil.

## IoT
Začnu s IoT. Nevím to jistě, ale myslím, že IoT bylo už i v PT 5 a už vůbec nemám tušení, co v té době bylo možné.

Jednotlivé IoT prvky mohou obsahovat kód. Abychom ho mohli vidět/upravit/vytvořit, potřebujeme se dostat do záložky "Programming", která se nachází v dialogu prvků po kliknutí na tlačítko "Advanced". Asi všechny IoT hračičky obsahují nějaký kód již v základu, ale ten nás ve většině případů vůbec nezajímá. Kód zde můžeme psát buď v JS nebo Pythonu. Pythonu jsem se osobně v PT ani nedotkl, takže nevím, v jakém stavu je, ale JS je v hrozném stavu - nejspíše si tvůrci vytvořili vlastní JS engine a potřebuješ opravdu hluboké znalosti JS, aby jsi zvládl(a) překonat tuhle otřesnost.

Tohle jako základ stačí, více v [dalším souboru](IoT/IoT.md).

## PT Script Modules
Druhá možnost jsou tzv. PT skripty. Na ně jsem narazil jako první a také jsem zde směřoval většinu práce. PT skripty (téměř) cokoliv. Ať "jednoduchá" manipulace s pracovním prostorem, tak i složitěji vypadající věci, jako je třeba implementace dodatečných oken a možností v menu.

Každý PT soubor (resp. uložení) může mít jeden svůj PT skript. Největší problém s PT skripty jsou oprávnění. Tuším, že i samotné spuštění PT skriptu vyžaduje potvrzení (i přestože mu nejsou dána žádná oprávnění) vyžaduje odkliknutí dialogového okna, což je velice nepraktické. IoT srandy toto nevyžadují, a proto také doporučuji promyslet tvůj nápad tak, aby ho bylo možné zrealizovat i přes omezený počet možností v IoT rozhraní.

Zde to opět zakončím, více v [dalším souboru](Modules/Modules.md).

# Interaktivita
Nyní ten největší problém, se kterým jsem se potýkal. Interaktivita. Pokud je k dispozici interaktivita s uživatelem, jde udělat spousta skvělých věcí. Naneštěstí jsem tento problém nevyřešil. Dle mých informací se to někomu jinému podařilo - ten někdo dokázal získávat pozici myši. Víc informací nevím, ale mám podezření, že se jednalo o starší verzi PT, která neměla tak "restriktivní" omezení na uživatelský vstup.

Abych vše uvedl na pravou míru, tak pozice (a kliknutí) myši je asi jediný, vstup, který nelze dobře zaznamenat, ale jistým způsobem tohle můžeme obejít. V rámci dokumentace uvedu tyto jednotlivé způsoby a nakonec možná i zjistíš, že to až tak špatné není (ale mě ta myš pořád štve).
