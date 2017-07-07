"use strict";

//differences between const and let///
let example = 1;
example = 5;
console.log(example);
// value of example is 5//

const secendExample = 2;
secendExample = 7;
console.log(secendExample);
//TypeError: Assignment to constant variable - declaring a new value to const which has been declaring before is error, value is not change //

