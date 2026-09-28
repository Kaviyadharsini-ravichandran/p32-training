function placeOrder( item: string, callback: () => void ): void 
{
    console.log("Order placed for: " + item);
    callback();
}

function showConfirmation(): void {
    console.log("Order confirmed!");
}

placeOrder("Pizza", showConfirmation); 