/// @ts-check
/// <reference path="../script modul.d.ts" />

/*
Spusť a nech kamaráda nakonfigurovat nějakou síť.
Když už bude nějaká síť hotova, zkus posunout nějaký prvek a sleduj, co se bude dít. :) 
Lze zastavit voláním funkce `stop()` a opětovně spustit voláním `start()`.
*/

/**
 * @param {string | number} x
 * @param {string | number} y
 */
function Vector(x,y) {
    this.x = Number(x);
    this.y = Number(y);
    return this;
}
Vector.prototype.save = function() {
    return this.x + ";" + this.y;
};
Vector.prototype.sqrLength = function() {
    return this.x*this.x + this.y*this.y;
};
Vector.prototype.length = function() {
    return Math.sqrt(this.sqrLength());
};
Vector.load = function(/** @type {string} */ str) {
   var splitted = str.split(";");
   return new Vector(splitted[0], splitted[1]);
};
Vector.add = function(/** @type {{ x: number; y: number; }} */ x,/** @type {{ x: number; y: number; }} */ y) {
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
Vector.normalize = function(/** @type {Vector} */ v) {
    var l = v.length();
    return new Vector(v.x / l, v.y / l);
};

function devicePosition(/** @type {_Device} */ d) {
    return new Vector(d.getCenterXCoordinate(), d.getCenterYCoordinate());
}
function devicePostionSet(/** @type {_Device} */ d, /** @type {Vector} */ pos) {
    var rounded = new Vector(Math.round(pos.x), Math.round(pos.y));
    d.addCustomVar("expected_location", rounded.save());
    return d.moveToLocationCentered(rounded.x, rounded.y);
}

var links = {};
/**
 * 
 * @param {_Device} d 
 * @param {string | null} skipPort 
 * @returns 
 */
function procDevice(/** @type {_Device} */ d, /** @type {string | null} */ skipPort, /** @type {boolean} */ checkExpected) {
    var pos = devicePosition(d);
    if (checkExpected) {
        var expected = d.getCustomVarStr("expected_location") == "" ? new Vector(-1,-1) : Vector.load(d.getCustomVarStr("expected_location"));
        var isAtExpected = Vector.compare(pos, expected);
        if (isAtExpected) return;
        d.addCustomVar("expected_location", pos.save());
    }

    var portCount = d.getPortCount();
    while (portCount--) {
        var port = d.getPortAt(portCount);
        if (skipPort != null && port.getObjectUuid() == skipPort) continue;
        /** @type {_Cable} */
        /// @ts-ignore
        var link = port.getLink();
        if (link === null) continue;
        if (link.getClassName() != "Cable") continue;
        var otherPort = link.getPort1();
        if (port.getObjectUuid() == otherPort.getObjectUuid()) otherPort = link.getPort2();

        var otherDevice = otherPort.getOwnerDevice();
        var otherPos = devicePosition(otherDevice);
        var direction = Vector.substract(otherPos, pos);
        var distance = direction.length();

        if (link.getObjectUuid() in links) {
            if (distance > links[link.getObjectUuid()]) {
                var newPos =  Vector.add(pos, Vector.multiply(Vector.normalize(direction), links[link.getObjectUuid()]));
                devicePostionSet(otherDevice, newPos);
                procDevice(otherDevice, otherPort.getObjectUuid(), false);
            }
        } else {
            links[link.getObjectUuid()] = distance;
        }
    }
}

var last = [];
var network = ipc.network();
function tick() {
    var deviceCount = network.getDeviceCount();
    var found = [];
    while (deviceCount--) {
        var device = network.getDeviceAt(deviceCount);
        found.push(device.getObjectUuid());
        procDevice(device, null, true);
    }
    last = found;
}


var id = -1;
function start() {
    id = setInterval(tick, 10);
}
function stop() {
    clearInterval(id);
}
start();