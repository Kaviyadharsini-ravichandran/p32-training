"use strict";
//arrow vth default pata and return type 
var subration = (a, b = 10) => {
    return a - b;
};
console.log(subration(50, 20));
//implict only for single return statement 
var multiple = (c, d) => c * d; //no need {} & return
console.log(multiple(100, 40));
//optional 
const User = (id, name, email) => {
    console.log("id :", id);
    console.log("name :", name);
    console.log("email :", email);
};
User(123, "kaviya", "kaviya@email.com");
User(123, "kaviya"); // email is optional
//rest 
const calcul = (...nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
};
console.log(calcul(2, 5));
console.log(calcul(10, 20, 30));
console.log(calcul(40, 50, 60, 70));
