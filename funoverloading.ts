// Different parameter types

function getinfo(id: number): string;
function getinfo(name: string): string;

// Implementation
function getinfo(param: number | string): string {

    if (typeof param === "number") {
        return "User ID is " + param;
    } else {
        return "User name is " + param;
    }
}

console.log(getinfo(101));
console.log(getinfo("kaviya"));

//diff number of para
function add(a: number , b:number):number
function add(a: number ,b:number ,c:number):number

function add(a:number, b:number, c?:number):number
{
    if(c !==undefined){
        return a+b+c;
    }
    else{
        return a+b;
    }
}
console.log(add(10,20));
console.log(add(10,20,30));

