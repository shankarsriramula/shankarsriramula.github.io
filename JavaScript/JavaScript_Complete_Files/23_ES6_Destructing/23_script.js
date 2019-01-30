let employee = {
    name : 'John',
    age : 40,
    salary : 80000,
    address : {
        company : 'Infosys',
        location : 'Hyderabad'
    }
};

// Destructuring
let {name , age , salary} = employee;

console.log(`Name : ${name} Age : ${age} Salary : ${salary}`);

//
let {company} = employee.address;
console.log(`Company : ${company}`);

// Swap two variables
let a = 10;
let b = 20;
[a , b] = [b , a];
console.log(`a : ${a} b: ${b}`);