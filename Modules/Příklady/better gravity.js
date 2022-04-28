/// @ts-check
/// <reference path="../script modul.d.ts" />

/*
Gravitace v2. Nyní s balistikou, takže můžeš doslova routery házet.
Gravitaci lze vypnout u jednotlivých zařízených nastavením atributu "physics" na hodnotu "0".
Lze zastavit voláním funkce `stop()` a opětovně spustit voláním `start()`.
*/


var ASSUME_PHYSICS = true;
var BOTTOM_Y = 650;
var GRAVITY_FORCE = 3;
var MIN_FORCE = 0.25;
var DRAG = 0.75;
var MOUSE_DRAG_EXP = 1;


/**
 * @param {string | number} x
 * @param {string | number} y
 */
function Vector(x,y) {
    this.x = Number(x);
    this.y = Number(y);
}
Vector.prototype.save = function() {
    return this.x + ";" + this.y;
};
Vector.load = function(/** @type {string} */ str) {
   var splitted = str.split(";");
   return new Vector(splitted[0], splitted[1]);
};
Vector.add = function(/** @type {{ x: any; y: any; }} */ x,/** @type {{ x: any; y: any; }} */ y) {
    return new Vector(x.x + y.x, x.y + y.y);
};
Vector.substract = function(/** @type {{ x: number; y: number; }} */ x,/** @type {{ x: number; y: number; }} */ y) {
    return new Vector(x.x - y.x, x.y - y.y);
};
Vector.multiply = function(/** @type {{ x: number; y: number; }} */ x,/** @type {number} */ y) {
    return new Vector(x.x * y, x.y * y);
};
Vector.compare = function(/** @type {{ x: number; y: number; }} */ x,/** @type {{ x: number; y: number; }} */ y) {
    return x.x == y.x && x.y == y.y;
};
var gravityVector = new Vector(0, GRAVITY_FORCE);


/**
 * @param {{ x: number; y: number; }} position
 * @param {{ x: number; y: number; }} force
 * @returns {Vector}
 */
function apply_force(position, force) {
    return Vector.add(position, force);
}

function tick() {
    var network = ipc.network();
    var deviceCount = network.getDeviceCount();
    while (deviceCount--) {
        var device = network.getDeviceAt(deviceCount);
        var physics = ASSUME_PHYSICS;
        if (device.getCustomVarStr("physics") !== "") physics = Boolean(device.getCustomVarStr("physics"));
        else device.addCustomVar("physics", ASSUME_PHYSICS ? "1" : "0");

        if (physics) {
            var cur = new Vector(device.getAreaLeftX(), device.getAreaTopY());
            var prev = device.getCustomVarStr("prev_location") === "" ? cur : Vector.load(device.getCustomVarStr("prev_location"));
            var expected = device.getCustomVarStr("expected_location") === "" ? cur : Vector.load(device.getCustomVarStr("expected_location"));

            
            device.addCustomVar("prev_location", cur.save());
            if (Vector.compare(cur, expected)) {
                var force = device.getCustomVarStr("force") === "" ? new Vector(0,0) : Vector.load(device.getCustomVarStr("force"));
                var next = apply_force(cur, force);
                next = new Vector(next.x, Math.min(next.y, BOTTOM_Y));
                device.moveToLocation(Math.round(next.x), Math.round(next.y));
                force = Vector.add(gravityVector, Vector.multiply(force, DRAG));
                device.addCustomVar("force", force.save());
                device.addCustomVar("expected_location", next.save());
            } else if (Vector.compare(cur, prev)) {
                var last = Vector.load(device.getCustomVarStr("last_location"));
                device.addCustomVar("force", Vector.multiply(Vector.substract(cur, last), MOUSE_DRAG_EXP).save());
                device.addCustomVar("expected_location", cur.save());
            } else {
                device.addCustomVar("last_location", prev.save());
            }
        }
    }
}

var id = -1;
function start() {
    id = setInterval(tick, 10);
}
function stop() {
    clearInterval(id);
}
start();
