// Create two variables and display their sum
let num1 = 10;
let num2= 20;
let sum = num1+ num2;
console.log("The Sum of num1,num2 is:"+ sum);
console.log(`The Sum of num1,num2 is:${sum}`);
console.log(`The Sum of ${num1},${num2} is:${sum}`);

// Find the biggest value between 2 numbers
let a = 20;
let b = 30;
if (a>b){
    console.log( `The Big value is ${a}`);
}
else {
    console.log(`The Big value is ${b}`);
}

// Find the biggest value among 3 numbers
let x =1000;
let y =2000;
let z =3000;
if(x > y && x > z){
    console.log(`The biggest value : ${x}`);
}
else if (y > z) {
    console.log(`The biggest value : ${y}`);
}
else {
    console.log(`The biggest value : ${z}`);
}