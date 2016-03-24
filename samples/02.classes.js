/*
   Classes are in essence syntactic sugar around the existing prototypical JS inheritance.
   The new constructs in ES2016 provide a *much* clearer way to define a typical object-oriented class.
 */

'use strict'; //nodeJS requires strict mode for classes


//statement block body
console.log('*** A typical class with a constructor, state (properties) and behaviour ***');

class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  
  get firstName() {
    return this._firstName;
  }
  
  get name() {
    return this.firstName + ' ' + this._lastName;
  }

  startRunning(from) {
    console.log(this.name + ' is running as fast as possible, because ' + from + '!');
  }

}

var person = new Person('Jan', 'Janssens');
console.log('Persons first name: ' + person.firstName);
console.log('Persons name: ' + person.name);
person.startRunning('ZOMBIES');


//class expressions
console.log('*** We can define classes as named or unnamed expressions ***');

var Rectangle = class {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  
  get area() {
    return this._width * this._height;
  }
};
console.log('The area of the rectangle is: ' + new Rectangle(5,4).area);


//static methods
console.log('*** Static methods are not tied to a specific class instance ***');

class Bicycle {
  fix() {
    Bicycle.fixAnother();
  }
  
  static get bicyclesFixed() {
    return this._fixCount;
  }
  
  static fixAnother() {
    if (!this._fixCount) { //they only way I know to initialize fixCount, is there a better way?
      this._fixCount = 0;
    }
    this._fixCount++;
  }
}

new Bicycle().fix();
new Bicycle().fix();
console.log('We\'ve fixed ' + Bicycle.bicyclesFixed + ' bicycles.');


//inheritance
console.log('*** We can implement class inheritance with extends and super ***');

class Shelf {
  canContain() {
    return [' stuff '];
  }
}

class BookShelf extends Shelf {
  canContain() {
    return super.canContain().concat([' books ']);
  }
}

console.log('A shelf can contain: ' + new Shelf().canContain().join());
console.log('A book shelf can contain: ' + new BookShelf().canContain().join());
