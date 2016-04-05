/*
  A few function parameter related improvements: default values, rest parameters and spreading of params.
  Currently not supported by NodeJS (5.1), use babel-node to run this sample
 */

console.log('*** Default parameters ***');

function increment(num, inc = 1) {
  return num + inc;
}

console.log('increment(4, 2) = ' + increment(4, 2));
console.log('increment(6) = ' + increment(6));

console.log('Default parameters do not have to be last in the list');

function printName(title, firstName = 'John', lastName) {
  console.log(title + ' ' + firstName + ' ' + lastName);
}

printName('Mr', undefined, 'Dolittle');


console.log('*** Rest parameters ***');

function multiply(...numbers) {
  var result = 1;
  numbers.forEach(function(num) {
    result *= num;
  });
  
  return result;
}

console.log('multiply(1, 2, 3, 4) = ' + multiply(1, 2, 3, 4));


console.log('*** Spread allows us to pass an array as a list of parameters ***');

var args = ['Ms', 'Lois', 'Merck'];
printName(...args);

console.log('Or use a combination of array and regular params');

printName('Dr', ...['Paul', 'Gerhardt']);
printName(...['Drs', 'Dirk'], 'Danzig');




