/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/

// no args
function greet() {
    console.log('Iam a no args function');
}
greet();

function greetArgs(name) {
    console.log(`Good Morning ${name}`);
}
greetArgs('john');

function greetLessArgs(name,age=40) {
    console.log(`Hello ${name} You are ${age} years Old!`);
}
greetLessArgs('John');

function greetMoreArgs(name,age) {
    console.log(`Hello ${name} You are ${age} years Old!`);
}
greetMoreArgs('Williams',35,'Manager');

function greetReturn(name) {
    let message = `Good Morning ${name}`;
    return message;
}
let theMessage = greetReturn('John');
console.log(theMessage);

// Function Expression
let functionExp = function() {
    console.log('Iam from Function Expression');
};
functionExp();

// Function Expression Example
let sumE = function(a , b) {
    let theSum = a + b;
    return theSum;
};

let mulE = function(a , b) {
    let theMul = a * b;
    return theMul;
};

console.log(`The Sum : ${sumE(10,20)}`);
console.log(`The Mul : ${mulE(10,20)}`);

// Functions as a parameters
let greet1 = function() {
    console.log('Iam from Greet1');
};
let greet2 = function() {
    console.log('Iam from Greet2');
};
let greetCaller = function(fName) {
    fName();
};
greetCaller(greet2);

// Callback Functions
let calculator = function(a , b , operation) {
    let result = 0;
    if(typeof operation === 'function'){
        result = operation(a, b);
    }
    return reslult;
};
let sum = function(a , b) {
    return a + b;
};
let mul = function(a , b) {
    return a * b;
};

let newResult = calculator(10,20,sum);
console.log(newResult);

// Function inside an object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
let thFullName = student.fullName();
console.log(thFullName);

// Nested Functions

function outerFn() {
    innerFn();
    function innerFn() {
        console.log('Iam From Inner Function');
    }
    console.log('Iam From Outer Function');
}
outerFn();

// Arrow Functions Es6 version
let printDate = () => {
    console.log(new Date());
};
printDate();

//
let add = (a , b) => a + b;
let result = add(10 , 20);
console.log(result);
