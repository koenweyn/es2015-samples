'use strict';


console.log('*** A map is a datastructure that holds key-value pairs ***');

let cities = new Map();
cities.set('2000', 'Antwerp');
cities.set(1000, 'Brussels').set(9000, 'Ghent');

console.log(`The city with postal code 1000 is ${cities.get(1000)}`);
console.log(`Note that key 1000 is not the same as key '1000': ${cities.get('1000')}`);


console.log('*** We can loop over values, keys, or entries (looping keeps the insertion order) ***');

console.log('values');
for(let city of cities.values()) {
  console.log(city);
}

console.log('keys');
for(let pc of cities.keys()) {
  console.log(pc);
}

console.log('entries');
for(let entry of cities.entries()) {
  console.log(`${entry[0]} -> ${entry[1]}`);
}
for(let entry of cities) {
  console.log(`${entry[0]} -> ${entry[1]}`);
}
console.log([...cities]);


console.log('*** You can construct a map from another iterable ***');
let countries = new Map([['BE', 'BELGIUM'], ['FR', 'FRANCE']]);
console.log(`We constructed a map with ${countries.size} countries`);
for(let entry of countries.entries()) {
  console.log(`${entry[0]} -> ${entry[1]}`);
}

