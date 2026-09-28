// Default parameter
const Total = function (a: number, b: number = 20): number {
    return a + b;
};

console.log(Total(5, 10));
console.log(Total(5)); // b = 20


// Rest parameter
const calculate = function (...nums: number[]): void {
    let sum: number = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    console.log(sum);
};

calculate(2, 5);
calculate(10, 20);
calculate(40, 50, 60);


// Multiple types
const countEle = function (...element: any[]): number {
    return element.length;
};

console.log(countEle(3, "kaviya", 78, "dharsini"));
console.log(countEle(20, 30, 40));
console.log(countEle("abc", "xyz"));


// Optional parameter
const display = function (
    id: number,
    name: string,
    email?: string
): void {
    console.log("id :", id);
    console.log("name :", name);
    console.log("email :", email);
};

display(123, "kaviya", "kaviya@email.com");
display(123, "kaviya"); // email = undefined