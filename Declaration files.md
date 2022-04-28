# Declaration files
Declaration files je koncepce z TypeScriptu. Pokud si někdy slyšel(a) pojem "(type) stub", tak tohle je přesně ono. Jedná se o definice, které říkají, jaké funkce, proměnné, třídy a další věci existují a lze je v TypeScriptu použít.

Zde se sice s TypeScriptem nesetkáme, ale tyto napovídající soubory můžeme zužitkovat i v normálním JS. Pokud máme IDE (resp. hinter), které podporuje TypeScript, pravděpodobně podporuje i TypeScript direktivy v normálním JS:
```js
/// @ts-check
/// <reference path="types/declarations.d.ts" />
```
Pokud tyto 2 řádky umístíme navrch JS souboru, získáme tím podporu kontroly typů a s tím i nápovědy z daného souboru.
