/*
  ES2015 now supports destructuring, allowing easier instantiation of variables that point to object members.
  This is not yet supported by NodeJS, run this via babel-node (added as a dev dependency)
 */

console.log('*** Destructuring of objects ***');

var alphabet = { a: 'A', b: 'B', c: 'C' };
var { a: alpha, c: gamma } = alphabet;

console.log(alpha);
console.log(gamma);


console.log('*** Destructuring of arrays ***');

var [element] = ['x'];
console.log(element);


console.log('*** Convoluted deeply nested destructuring ***');
let obj = { users: [{ name: 'Johnny', password: 'password' }, {}], loggedOn: true };
let { users: [{name: firstUserName}] } = obj; // firstUserName = Johnny
console.log(firstUserName);



