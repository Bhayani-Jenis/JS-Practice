// 5. Trace the execution of this class logic.

class Counter {
  static count = 0;          //it is share by all objects
  count = 10;               //it is saperate for all objects

  constructor() {
    Counter.count++;
  }

  getCount() {

    return this.count;      //it is saperate for all objects
  }

  static getStaticCount() {

    return this.count;// this in static function refer to the class it self and class.count gives a value of static variable
  }
}

const c1 = new Counter(); //increment static count  value(1) and for c1:count initialize with =10
const c2 = new Counter(); //increment static count  value(2) and for c2:count initialize with =10

console.log(c1.getCount());        // 10
console.log(Counter.getStaticCount()); // 2
// console.log(c1.getStaticCount());  // it gives typeerror because static function is always calls by the class name not by object name so it gives error
