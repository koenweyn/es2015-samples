/**
 * Run node with option '--expose-gc' to test garbage collection
 */

'use strict';


console.log('*** WeakSets can only contain objects, not primitives ***');
let persons = new WeakSet();
try {
  persons.add('a').add('b').add('a').add('c');
} catch(e) {
  console.log('Cannot add strings')
}

console.log('*** WeakSets can hold an object ***');
let person1 = {
  firstName: 'Koen',
  lastName: 'W'
};
persons.add(person1);
console.log(`Is person1 in the set? ${persons.has(person1)}`);

persons.delete(person1);
console.log(`Is person1 in the set? ${persons.has(person1)}`);


console.log('*** WeakSets do not prevent an element from being garbage collected ***');
let person2 = {
  firstName: 'Lotte',
  lastName: 'W'
};

persons.add(person2);
console.log(`Is person2 in the set? ${persons.has(person2)}`);

person2 = undefined;

try {
  global.gc();
} catch(e) {
  console.log('Add --expose-gc to the list of node startup arguments to allow for manual gc');
}
console.log(`Is person2 in the set? ${persons.has(person2)}`);

