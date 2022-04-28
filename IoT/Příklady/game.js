/// @ts-check
/// <reference path="../iot.d.ts" />

/*
Abychom tohle zprovoznili, potřebujeme 40 prvků pojmenováné "PC0" až "PC9", "Server0" až "Server9", to stejné i pro "Router" a "Switch".
Dále potřebujeme vytvořit prvek hráč, který má jméno ".".
A nakonec by bylo vhodné, aby obrázek pro tento prvek, na kterém poběží skript, byl alespoň 40 pixelů široký.

Pak stačí jen skript nahrát na IoT prvek, spustit a užíz si tuto jednoduchou gamesku.
*/

var tickPause = 10;
var minSpawnX = 50;
var maxSpawnX = 1500;
var minSpawnY = 15;
var maxX = 1700;
var maxY = 600;
var minVelocityX = -3;
var maxVelocityX = 3;
var minVelocityY = 1;
var maxVelocityY = 8;
var minSpawnCount = 1;
var maxSpawnCout = 1;
var minSpawnTickPause = 500 / tickPause;
var maxSpawnTickPause = 1750 / tickPause;
var catchRadius = 25;
var deviceStackPosition = new Vector(4000, 4000);

var score = 0;
var soundOffset = 0;
var ticksUntilSpawn = random(minSpawnTickPause, maxSpawnTickPause);


var FILE_root = "/../../../../../../../../../";
var FILE_wingb = FILE_root + "Windows/Media/Windows Background.wav";
var FILE_winfg = FILE_root + "Windows/Media/Windows Foreground.wav";
var FILE_winns = FILE_root + "Windows/Media/Windows Notify System Generic.wav";
var COUNT_sound = 10;

var workspace;

var COUNT_device = 10;
/** @type {LogicalObject[]} */
var PC = [];
/** @type {LogicalObject[]} */
var Server = [];
/** @type {LogicalObject[]} */
var Router = [];
/** @type {LogicalObject[]} */
var Switch = [];
/** @type {LogicalObject} */
var player;
/** @type {LogicalObject[]} */
var spawnable = [];
/** @type {LogicalObject[]} */
var spawned = [];

function setup() {
    delay(1000);
    workspace = getLogicalObject().getParent();

    destroySounds();
    for (var x = 0; x < COUNT_sound; x++) {
        addSound("winbg" + x, FILE_wingb);
        addSound("winfg" + x, FILE_winfg);
        addSound("winns" + x, FILE_winns);
    }
    player = workspace.getChild(".");
    /** @param {LogicalObject} device */
    function initDevice(device) {
        spawnable.push(device);
        device.moveCenterTo(deviceStackPosition.x, deviceStackPosition.y);
        device.setVelocity(0, 0);
        return device;
    }
    for (var x = 0; x < COUNT_device; x++) {
        PC.push(initDevice(workspace.getChild("PC" + x)));
        Server.push(initDevice(workspace.getChild("Server" + x)));
        Router.push(initDevice(workspace.getChild("Router" + x)));
        Switch.push(initDevice(workspace.getChild("Switch" + x)));
    }

    while (true) {
        tick();
        delay(tickPause);
    }
}
function tick() {
    var p = Vector.fromDeviceCenterPosition(player);
    for (var x in spawned) {
        // @ts-expect-error
        x = Number(x);
        if (Vector.sqrDistance(p, Vector.fromDeviceCenterPosition(spawned[x])) <= catchRadius*catchRadius) {
            score += 10;
            // @ts-expect-error
            despawn(x);
        } else if (spawned[x].getCenterY() > maxY) {
            // @ts-expect-error
            despawn(x);
            playSound("win"+pickRandom(["bg","fg","ns"])+soundOffset++);
            soundOffset %= COUNT_sound;
        } else if (spawned[x].getCenterX() > maxX) {
            spawned[x].moveCenterTo(maxX, spawned[x].getCenterY());
            spawned[x].setVelocity(0, spawned[x].getYVelocity()+Math.abs(spawned[x].getXVelocity()));
        } else if (spawned[x].getX() == 0) {
            spawned[x].moveTo(1, spawned[x].getY());
            spawned[x].setVelocity(0, spawned[x].getYVelocity()+Math.abs(spawned[x].getXVelocity()));
        }
    }

    if (ticksUntilSpawn-- == 0) {
        var count = random(minSpawnCount, maxSpawnCout);
        while (count--)
            spawn();
    }

    setCustomText(0,0,150,150, "  Tvé skóre je: " + score);
    if (score > 150) {
        minSpawnTickPause = 300 / tickPause;
        maxSpawnTickPause = 1250 / tickPause;
        minVelocityY = 3;
        minSpawnCount = 2;
        maxSpawnCout = 5;
    } else if (score > 70) {
        minSpawnTickPause = 400 / tickPause;
        maxSpawnTickPause = 1500 / tickPause;
        minVelocityY = 2;
        maxVelocityY = 10;
        maxSpawnCout = 3;
    }
}
function spawn() {
    // console.log("===== spawn start =====");
    // console.log("spawnable.length: " + spawnable.length);
    // console.log("spawned.length: " + objectSize(spawned));
    var d = spawnable.shift();
    // console.log("d: " + (d == null ? "null" : (d + " (" + d.getName() + ")")));
    spawned.push(d);
    d.setVelocity(random(minVelocityX, maxVelocityX), random(minVelocityY, maxVelocityY));
    d.moveCenterTo(random(minSpawnX, maxSpawnX), minSpawnY);
    ticksUntilSpawn = random(minSpawnTickPause, maxSpawnTickPause);
    // console.log("ticksUntilSpawn: " + ticksUntilSpawn);
    // console.log("spawnable.length: " + spawnable.length);
    // console.log("spawned.length: " + objectSize(spawned));
    // console.log("===== spawn end =====");
}
/** @param {number} index */
function despawn(index) {
    // console.log("===== despawn start =====");
    // console.log("index: " + index);
    // console.log("spawnable.length: " + spawnable.length);
    // console.log("spawned.length: " + objectSize(spawned));
    var d = spawned[index];
    // console.log("d: " + (d == null ? "null" : (d + " (" + d.getName() + ")")));
    removeArrayIndexWithoutSpliceBecauseWeDontHaveItCuzThisJSImplementationIsHorrible(spawned, index);
    spawnable.push(d);
    d.setVelocity(0, 0);
    d.moveCenterTo(deviceStackPosition.x, deviceStackPosition.y);
    // console.log("spawnable.length: " + spawnable.length);
    // console.log("spawned.length: " + objectSize(spawned));
    // console.log("===== despawn end =====");
}

/**
 * @param {string} id
 * @param {number} count
 * @param {number} pause
 */
function playCascadeSound(id, count, pause) {
    while (count--) {
        playSound(id + count);
        delay(pause);
    }
}
/**
 * @param {number} min
 * @param {number} max
 */
function random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
/**
 * @param {any[]} array
 */
function pickRandomIndex(array) { return Math.floor(Math.random() * array.length); }
/**
 * @param {any[]} array
 */
function pickRandom(array) { return array[pickRandomIndex(array)]; }
/** @param {object} o */
function objectSize(o) {
    var x = 0;
    for (var key in o) if (key in o) x++;
    return x;
}
// Fisher–Yates shuffle algorithm
// Taken from here (with little bit of edit): https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var m = array.length, tmp, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        tmp = array[m];
        array[m] = array[i];
        array[i] = tmp;
    }
    return array;
}
function removeArrayIndexWithoutSpliceBecauseWeDontHaveItCuzThisJSImplementationIsHorrible(arr, index) {
    for (var x = index+1; x < arr.length; x++)
    	arr[x-1] = arr[x];
    arr.length = x-1;
    return arr;
}

/**
 * @param {string | number} x
 * @param {string | number} y
 */
function Vector(x, y) {
    this.x = Number(x);
    this.y = Number(y);
}
Vector.prototype.save = function () {
    return this.x + ";" + this.y;
};
Vector.prototype.sqrLength = function () {
    return this.x * this.x + this.y * this.y;
};
Vector.prototype.length = function () {
    return Math.sqrt(this.sqrLength());
};
Vector.prototype.duplicate = function () {
    return new Vector(this.x, this.y);
};
Vector.prototype.add = function (/** @type {{ x: number; y: number; }} */ v) {
    this.x += v.x;
    this.y += v.y;
    return this;
};
Vector.prototype.substract = function (/** @type {{ x: number; y: number; }} */ v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
};
Vector.prototype.multiply = function (/** @type {number} */ x) {
    this.x *= x;
    this.y *= x;
    return this;
};
Vector.prototype.normalize = function () {
    var l = this.length();
    this.x /= l;
    this.y /= l;
    return this;
};
Vector.load = function (/** @type {string} */ str) {
    var splitted = str.split(";");
    return new Vector(splitted[0], splitted[1]);
};
Vector.compare = function (/** @type {{ x: number; y: number; }} */ a, /** @type {{ x: number; y: number; }} */ b) {
    return a.x == b.x && a.y == b.y;
};
Vector.fromDevicePosition = function (/** @type {LogicalObject} */ d) {
    return new Vector(d.getX(), d.getY());
};
Vector.fromDeviceCenterPosition = function (/** @type {LogicalObject} */ d) {
    return new Vector(d.getCenterX(), d.getCenterY());
};
Vector.sqrDistance = function (/** @type {{ x: number; y: number; }} */ a, /** @type {{ x: number; y: number; }} */ b) {
    var x = a.x - b.x;
    var y = a.y - b.y;
    return x * x + y * y;
};
Vector.distance = function (/** @type {{ x: number; y: number; }} */ a, /** @type {{ x: number; y: number; }} */ b) {
    return Math.sqrt(Vector.sqrDistance(a, b));
};
