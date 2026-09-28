// let names:string[]=[];   //declaration 
// names[0]="kaviya";     //initilization
// names[1]="dharsini";
// names[2]="ravi";
// console.log(names);


//declaration + initilization 
// let emp: string[] = ["kaviya", "ravi", "dharsini"];

// console.log(emp.length)
// console.log(emp);

//generic way
let empid: Array<number>=[1003,1005];
for(let i=0; i<empid.length; i++){            ///for loop
    console.log(empid[i]);
}

let empdata: Array<number | string>=[1001,"kaviya",1002,"ravi"];
for(let i in empdata)                      //for in loop
{
    console.log(empdata[i]);
}


let mixed: Array<any>=["kaviya",1001,null,false];
for(let values of mixed)
{
    console.log(values);                        //for of
}

