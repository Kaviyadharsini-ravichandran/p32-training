//while loop 
var i : number = 2;
while (i <=10) {
    if (i % 2 === 0)
         {
    console.log( i);
    }
    i++;
}

var j : number = 10;
while (j >= 1) {
    console.log( j);
    j--;
    }
   

//do while loop
var k : number = 1;
    do {
    console.log( k);
    k++;
    } while (k <= 5);

var l : number = 5;
    do {
    console.log( l);
    l--;
    } while (l >= 1);

//for loop
for (var m : number = 1; m <= 5; m++) {
    console.log( m);
}

for (var n : number = 2; n <= 10; n += 2) {
    console.log( n);
}

//break statement
for (var o : number = 1; o <= 10; o++) {
    if (o === 5) {
        break;
    }
    console.log(o); 
}

//continue statement
for (var p : number = 1; p <= 10; p++) {
    if (p === 5) {
        continue;
    }
    console.log(p);
}
