"use strict";
function placeOrder(item, callback) {
    console.log("Order placed for: " + item);
    callback();
}
function showConfirmation() {
    console.log("Order confirmed!");
}
placeOrder("Pizza", showConfirmation);
