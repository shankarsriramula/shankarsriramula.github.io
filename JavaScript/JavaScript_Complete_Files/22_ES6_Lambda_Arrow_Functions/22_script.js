// Normal Function
function greet1() {
    console.log('Iam From greet 1');
}
greet1();

// Function Expression
let greet2 = function(){
    console.log('Iam from greet 2');
};
greet2();

// Arrow Function
let greet3 = () => console.log('Iam from greet 3');
greet3();

// Arrow Function
let sum = (a , b) => a + b;
console.log(`The Sum is : ${sum(10,20)}`);
