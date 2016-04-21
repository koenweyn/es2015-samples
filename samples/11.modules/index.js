/*
  ES2015 modules standardize the different ES5 modules.
  A module is a file and can export nothing, one default value/function/class or more. 
 */


'use strict';

console.log('*** modules don\'t have to export anything ***');
import './modules/private';


console.log('*** some modules export a single (default) construct ***');
import Bike from './modules/bicycle';
const myBike = new Bike();
myBike.greet();


console.log('*** some modules export multiple constructs, you can use these with a single import statement ***');
import * as greetings from './modules/greetings';

greetings.goodMorning();
greetings.goodEvening();


console.log('*** or import a single construct ***');
import {goodEvening} from './modules/greetings';

goodEvening();


console.log('*** or import multiple in one go ***');
import {goodEvening as hello, goodMorning} from './modules/greetings';

goodMorning();
hello();
