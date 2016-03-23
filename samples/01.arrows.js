/*
 Arrows are a function shorthands using the => syntax.
 They support both statement block bodies and expression bodies.
 Also useful because the this inside an arrow function corresponds to the this of the declaring code.
 */

const alphabet = [ 'a', 'b', 'c' ];

//statement block body
console.log('*** Statement block body: print the alphabet ***');

alphabet.forEach((el) => {
  console.log(el);
});


//expression body
console.log('*** Expression body: double the alphabet ***');

alphabet
  .map((letter) => letter + letter)
  .forEach((letters) => console.log(letters));


//this inside arrow function
console.log('*** Use of \'this\': name with delay ***');
var person = {
  printName: function() {
    console.log('John Roberts');
  },
  
  printNameAfter: function(delay) {
    setTimeout(() => this.printName(), delay);
  }
};
person.printNameAfter(100);
  
