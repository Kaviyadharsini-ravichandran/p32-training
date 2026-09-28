"use strict";
let number = [10, 20, 30, 40, 50];
// forEach()
number.forEach((num) => {
    console.log(num);
});
// map()
let doubled = number.map((num) => {
    return num * 2;
});
console.log("map:", doubled);
// reduce()
let total = number.reduce((sum, num) => {
    return sum + num;
}, 0);
console.log("reduce:", total);
// some()
let someResult = number.some((num) => {
    return num > 40;
});
console.log("some:", someResult);
// every()
let everyResult = number.every((num) => {
    return num >= 10;
});
console.log("every:", everyResult);
// filter()
let filtered = number.filter((num) => {
    return num >= 30;
});
console.log("filter:", filtered);
