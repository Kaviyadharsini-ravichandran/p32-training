"use strict";
function search(element, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
let arr = [10, 20, 30, 40, 50];
console.log(search(30, arr));
console.log(search(300, arr));
