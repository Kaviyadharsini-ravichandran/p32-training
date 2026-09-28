"use strict";
// Different parameter types
// Implementation
function getinfo(param) {
    if (typeof param === "number") {
        return "User ID is " + param;
    }
    else {
        return "User name is " + param;
    }
}
console.log(getinfo(101));
console.log(getinfo("kaviya"));
function add(a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
console.log(add(10, 20));
console.log(add(10, 20, 30));
// //diff return type
// function input(str:string):string
// function input(str:string):string
