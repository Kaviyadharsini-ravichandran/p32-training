let fruits: string[] = ["apple", "banana", "mango"];
console.log("Original:", fruits);
 
fruits.push("orange");                         //adds element at the END 
console.log("1.After push:", fruits);

fruits.pop();                                  //removes LAST element
console.log("2.After pop:", fruits);

fruits.shift();                                //removes FIRST element
console.log("3.After shift:", fruits);

fruits.unshift("grapes");                      //adds element at the BEGINNING
console.log("4.After unshift:", fruits);

let vegetables: string[] = ["carrot", "potato"];

let food: string[] = fruits.concat(vegetables);     //combines two arrays

console.log("5.After concat:", food);


//gets a portion of array
let colors: string[] = ["red", "blue", "green", "yellow"];

let selectedColors = colors.slice(1, 3);

console.log("6.Slice:", selectedColors);



//removes/adds elements in original array
let numbers: number[] = [10, 20, 30, 40];

numbers.splice(1, 2);

console.log("7.After splice:", numbers);


//finds the index of an element
let names: string[] = ["kaviya", "ravi", "dharsini"];

console.log(names.indexOf("ravi"));        

console.log(names.includes("ravi"));       // checks whether element exists

console.log(names.includes("apple"));


//array into string
let languages: string[] = ["Java", "TypeScript", "Python"];

let result: string = languages.toString();

console.log(result);
