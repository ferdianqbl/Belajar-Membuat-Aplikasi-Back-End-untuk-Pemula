// const moment = require("moment");

// const date = moment().format("MMM Do YY");
// console.log(date);

const lodash = require("lodash"); // TODO

const myOddEvenArray = lodash.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);
