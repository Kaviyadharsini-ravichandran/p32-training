//store values in tuple in the order of dt we mnted
let users:[string,number, boolean,null,string]=["ravi",1002,true,null,"dharsini"]

{
for(let i=0; i<users.length; i++)
    {
        console.log(users[i])
    }    
}


let data:[string,number, boolean]=["kaviya",1002,true]

{
    for (let i in data)
    {
        console.log(data[i])
    }
}

let peoples:any[]=["kaviya",1002,true,null,1003,"apple"]
{
    for(let person of peoples)
    {
        console.log(person)
    }
}