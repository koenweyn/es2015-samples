/*
 2 new ways to declare variables: let for things that change, const for things that don't change.
 */

'use strict'; //nodeJS requires strict mode for let and const

console.log(`*** variables defined by let are scoped to the surrounding block and its sub-blocks 
    as opposed to var which is always scoped to a function or the global scope ***`);

function printAlphabet() {
  let alphabet = ['a', 'b', 'c'];
  let letter = 'z';
  for(let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i]; //this is a different variable
    console.log(`${i}: ${letter}`);
  }
  
  //console.log(i); //Reference Error
  console.log(letter);
  //let letter = 'y'; //We cannot declare within the same block scope -> Syntax Error
}
printAlphabet();


console.log('*** variables declared with const are read-only: they cannot be redeclared ***');

const PI = 3.1415;
// PI = 'something else'; //Type Error
console.log(`PI = ${PI}`);


console.log('*** the scope of a const variable is global or the surrounding function ***');
function makeAnotherPI() {
  const PI = 3.1415927;
  console.log(`PI = ${PI}`);
}
makeAnotherPI();
console.log(`PI = ${PI}`);


