'use strict';


console.log('*** WeakMaps can only contain objects as keys, not primitives ***');

let cities = new WeakMap();
try {
  cities.set('2000', 'Antwerp');
} catch(e) {
  console.log('Cannot use strings as keys');
}

let pc2000 = {
  postalCode: 2000
};
let pc9000 = {
  postalCode: 9000
};

cities
  .set(pc2000, 'Antwerp')
  .set(pc9000, 'Ghent');

console.log(`The city with postal code 2000 is ${cities.get(pc2000)}`);
console.log(`Note that object equality is not sufficient for keys: ${cities.get({postalCode: 2000})}`);

console.log('*** WeakMaps do not hold strong references to keys ***');

let pc1000 = {
  postalCode: 1000
};
cities.set(pc1000, 'Brussels');
console.log(`Is city with postal code 1000 in the map? ${cities.has(pc1000)}`);

pc1000 = undefined;

try {
  global.gc();
} catch(e) {
  console.log('Add --expose-gc to the list of node startup arguments to allow for manual gc');
}

console.log(`Is city with postal code 1000 in the map? ${cities.has(pc1000)}`);
