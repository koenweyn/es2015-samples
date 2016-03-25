/*
  Enhanced object initializers are syntactic sugar for creating objects in a more concise way
 */

//shorthand property names
console.log('*** Shorthand property names ***');

var firstName = 'Jenny', lastName = 'Birckland';
var person = { firstName, lastName };
console.log('Person: ' + JSON.stringify(person));


//shorthand method names
console.log('*** Shorthand method names ***');

var person2 = {
  firstName, 
  lastName,
  printName() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};
person2.printName();

//computed property names
console.log('*** computed properties ***');
var nameTypes = [ 'first', 'last' ];
var printMethodName = 'printName';
var person3 = {
  [nameTypes[0] + 'Name']: 'Bob',
  [nameTypes[1] + 'Name']: 'Jameson',
  [printMethodName]: function() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};
person3.printName();
