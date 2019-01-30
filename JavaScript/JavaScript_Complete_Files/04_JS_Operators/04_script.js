// Assignment operator =
let name = 'John';
console.log(`The name is : ${name}`);

// Arithmetic operators + - * /
let num1 = 10;
let num2 = 20;
console.log(`The Sum is : ${num1+num2}`);
console.log(`The Sub is : ${num1-num2}`);
console.log(`The Mul is : ${num1*num2}`);
console.log(`The div is : ${num1/num2}`);

let someNumber = 121;
if (someNumber % 2 === 0) {
    console.log(`It is even Number`);
}
else{
    console.log(`It is odd Number`);
}

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let add= 0;
add = add +(a+b); // 0+ 10 + 20 => 30
add += (a + b); // 30 + 10 + 20 => 60
console.log(add); // 60


// Conditional operators < , > , <= , >= , !=
let age = 25;
if (age < 18){
    console.log(`You are Minor`);
}
else {
    console.log(`You are Major`);
}


// Unary Operator ++ , -- (pre , post)
let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x); // 13

// Logical operators AND , OR
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until parents Agreed');
}


// String Concatenation Operator
name = 'John';
age = 40;
console.log('Hello ' + name + " Age : " + age);

// Ternary operator (? :)
age = 25;
let message = '';
(age < 18)? message = 'You Are Minor' : message = 'You are Major';
console.log(message);

// Type of operator
let abc = 10;
abc = 'Test';
abc = true;
console.log(`Value : ${abc} Type : ${typeof abc}`);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Bot are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Bot are NOT Equal');
}