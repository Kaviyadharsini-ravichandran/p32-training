"use strict";
//named functions vth default parameter
function addnum(a, b = 20) {
    return a + b;
}
// let sum: number = addnum(5, 10); //values passed and stored in sum 
// console.log("Sum of 5 and 10 is: " + sum);
console.log(addnum(5, 10));
//named function vth rest parameters
function addition(...nums) {
    let i;
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log(sum);
}
addition(2, 5);
addition(10, 20);
addition(40, 50, 60);
//mutiple types
function find(...element) {
    return element.length;
}
console.log(find(3, "kaviya", 78, "dharsini"));
console.log(find(20, 30, 40));
console.log(find("abc", "xyz"));
//optional parameter
function optional(id, name, email) {
    console.log("id :", id);
    console.log("name :", name);
    console.log("email :", email);
}
optional(123, "kaviya", "kaviya@email.com");
optional(123, "kaviya"); //email = undefined
