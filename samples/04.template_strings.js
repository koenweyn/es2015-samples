/*
  ES2015 now supports multi-line strings, as well as strings that have inline variables and expressions
 */

console.log('*** Multi-line strings ***');

var multiLineString = 
  `This is a string that spans multiple lines.
Ain't that cool?`;
console.log(multiLineString);


console.log('*** Template strings ***');

var name = 'Peter Pollock';
var templateString = 
  `Well hello there, ${name}!`;
console.log(templateString);

var x = 5, y = 42;
var simpleMath = `${x} + ${y} = ${x + y}`;
console.log(simpleMath);
