// Velice jednoduchá gravitace
// s() = start; c() = stop

c = function(){clearTimeout(id);};
n = ipc.network();
s = function(){id=setInterval(function(){var x=n.getDeviceCount();while(x--){var d=n.getDeviceAt(x);d.moveToLocation(d.getXCoordinate(),d.getYCoordinate()+1);}},10)}

s()