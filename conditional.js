"use strict";
// if conditional statement
var age = 19;
if (age >= 18) {
    console.log("You are eligible to vote " + age);
}
//if else conditional statement
var num = 17;
if (num % 2 === 0) {
    console.log(num, " is an even number");
}
else {
    console.log(`${num} is an odd number`);
}
//nested if else conditional statement
var marks = 85;
if (marks >= 90 && marks <= 100) {
    console.log("Grade: A");
}
else if (marks >= 75 && marks < 90) {
    console.log("Grade: B");
}
else if (marks >= 60 && marks < 75) {
    console.log("Grade: C");
}
else {
    console.log("Grade: D");
}
//switch case statement
var x = 10, y = 20;
switch (x * y) {
    case 200:
        console.log("result is " + x * y);
        break;
    case 50:
        console.log("result is " + x * y);
        break;
    case 150:
        console.log("result is " + x * y);
        break;
    default:
        console.log("Invalid result");
        break;
}
