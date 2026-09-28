// //both type & inital value 
var a : number = 1; 
console.log(a);

//only type
var b: number;
b = 2; //initial value not assiged later only assigned
console.log(b);

//only initial value
var c = 3;
console.log(c);

//without type & initial value
var d; 
d = 4;  //assigned later only assigned
console.log(d);

//var , let & const
var x = 100;
let y = 200;
const z = 300;  
function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }

    console.log(a); //  Works
    // console.log(b); //  Error
    // console.log(c); //  Error
}
console.log(x);
console.log(y);
console.log(z);
