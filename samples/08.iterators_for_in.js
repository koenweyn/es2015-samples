/*
 For .. in is a loop construct to loop over the elements of an array (and any other Object with an iterator symbol).
 Maps, Sets and Strings also support iterating.
 */

'use strict';

console.log('*** for .. in loops over the elements in an array ***');

let alphabet = ['a', 'b', 'c'];

for (let letter of alphabet) {
  console.log(letter);
}


console.log('*** for .. in can loop over a string ***');

let smileys = '😮😀😞😃';

for (let smiley of smileys) {
  console.log(smiley);
}

console.log('*** for .. in can loop over any object that has an iterator symbol ***');

function numberList(max = 3) {
  console.log(`This number list has a maximum of ${max}`);
  let i = 0;
  return {
    [Symbol.iterator]: function() {
      return {
        next: function() {
          return {
            done: i >= max,
            value: i++
          };
        }
      }
    }
  };
}

for (let num of numberList()) {
  console.log(num);
}


console.log('*** iterable objects can also have a return method that is called when the program breaks out of the loop ***');

function breakingNumberList(max = 3) {
  console.log(`This breaking number list has a maximum of ${max}`);
  let i = 0;
  return {
    [Symbol.iterator]: function() {
      return {
        next: function() {
          return {
            done: i >= max,
            value: i++
          };
        },
        return: function() {
          console.log('The iterator is stopped by breaking the loop');
        }
      }
    }
  };
}

let i = 0;
for (let num of breakingNumberList(10)) {
  console.log(num);
  if (i++ >= 5) {
    break;
  }
}
