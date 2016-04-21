/*
  Modules can export a single default construct
 */

export default class Bicycle {
  constructor(numWheels = 2) {
    this._numWheels = numWheels;
  }

  get numWheels() {
    return this._numWheels;
  }

  greet() {
    console.log(`Hello there, I'm your Bicycle, at your service, sporting ${this.numWheels} wheels`);
  }

}