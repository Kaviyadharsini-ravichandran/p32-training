function search(element: number, arr:number[]):boolean
{
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i]===element)
        {
            return true;
        }
    }
    return false;
}
let arr:number[]=[10,20,30,40,50];
console.log(search(30,arr));
console.log(search(300,arr));
