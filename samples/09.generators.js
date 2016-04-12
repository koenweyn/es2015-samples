/*
 Generator functions can be used to create efficient iterators.
 A generator computes its next value on demand, making it efficient for expensive operations.
 The object returned by iterator.next() is { value: someValue, done: boolean }
 */

'use strict';

console.log('*** a generator function allows the construction of an efficient iterator ***');

function* numberIterator(from = 0) {
  let num = from;
  while (true) {
    yield num++;
  }
}

let it = numberIterator(5);
console.log('next: ' + it.next().value);
console.log('next: ' + it.next().value);
console.log('next: ' + it.next().value);


console.log('*** a generator doesn\'t have to be infinite ***');

function* finiteNumberIterator(from = 0, to = 10) {
  let num = from;
  while (num <= to) {
    yield num++;
  }
}

it = finiteNumberIterator(15, 20);

while(true) {
  let nxt = it.next();
  if (nxt.done) {
    break;
  }
  console.log(nxt.value);
}


console.log('*** the next method accepts a value that can be used in the generator ***');

let alphabet = ['a','b','c'];

function* alphabetIterator() {
  let idx = 0;
  while(idx < alphabet.length) {
    var reset = yield alphabet[idx++];
    if (reset) {
      idx = 0;
    }
  }
}

it = alphabetIterator();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next(true).value);
console.log(it.next().value);
console.log(it.next().value);
