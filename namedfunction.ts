//named functions vth default parameter
function addnum(a: number, b: number =20): number {
    return a + b;
}
// let sum: number = addnum(5, 10); //values passed and stored in sum 
// console.log("Sum of 5 and 10 is: " + sum);

console.log(addnum(5,10)); 

//named function vth rest parameters
function addition(...nums : number[])
{
    let i;
    let sum : number = 0;
    for(i=0; i<nums.length; i++){
        sum = sum +nums[i];
    }
console.log(sum);
}
addition(2,5);
addition(10,20);
addition(40,50,60);

//mutiple types
function find(...element : any[]) //instead any we can use union lky (number | string)
{
    return element.length;
}
console.log(find(3,"kaviya",78,"dharsini"));
console.log(find(20,30,40));
console.log(find("abc","xyz",));

//optional parameter
function optional(id:number,name:string,email?:string):void{
    console.log("id :",id)
     console.log("name :",name);
      console.log("email :", email)
}
optional(123,"kaviya","kaviya@email.com");
optional(123,"kaviya"); //email = undefined

 