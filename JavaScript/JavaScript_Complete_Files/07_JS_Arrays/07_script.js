// creation of arrays
let array = [10,20,30,40,50];
console.log(array);

// Accessing an array and its properties
console.log(array[0]); // 10

// Access not existed property from an array
console.log(array[15]); // undefined

// adding properties to an array
array[5] = 60;
console.log(array);

// Accessing length of an Array
console.log(array,length);

// reverse the array using reverse()
array = [10,20,30,40,50];
console.log(array);
array.reverse();
console.log(array);

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
console.log(array);
array.shift();
console.log(array);

// Add value to front of the array: unshift()
array = [10,20,30,40,50];
console.log(array);
array.unshift();
console.log(array);

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
console.log(array);
array.pop();
console.log(array);


// Add value the end of the array: push()
array = [10,20,30,40,50];
console.log(array);
array.push(60);
console.log(array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
// splice(index)
array = [10,20,30,40,50];
console.log(array);
array.splice(3);
console.log(array);

// splice(index,number)
array = [10,20,30,40,50];
console.log(array);
array.splice(2,2);
console.log(array);

// splice(index,1,replaceElement)
array = [10,20,30,40,50];
console.log(array);
array.splice(5,1,80,90);
console.log(array);


// Create a copy of an array. Typically assigned to a new variable:slice();
let arr1 = [10,20,30,40];
let arr2 = arr1.slice();
arr1.splice(2);
console.log(arr2);

// indexOf()
array = ['html','css','js'];
console.log(array.indexOf('css')); // 1
console.log(array[1]); // css

// indexOf()
array = ['html','css','js'];
let someVar = 'Bootstrap';
if(array.indexOf(someVar) === -1){
    console.log(`The ${someVar} is Not Exists`);
}
else{
    console.log(`The ${someVar} exists @ ${array.indexOf(someVar)}`);
}

// Join()
array = ['html','css','js','bootstrap'];
console.log(array);
let techStr = array.join(' * ');
console.log(techStr);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Sr.Manager',
        active : true
    },
    {
        name : 'Williams',
        age : 35,
        designation : 'Manager',
        active : false
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'Laura',
        age : 23,
        designation : 'Software Engineer',
        active : false
    }
];

// Using Normal for loop
let output = '';
for(let i=0; i<employees.length; i++){
    let employee = employees[i];
    output += employee.name.toUpperCase() + ' ';
}
console.log(output);

// Using for-in loop ES5
output = '';
for(let index in employees){
    let employee = employees[index];
    output += employee.name.toUpperCase() + ' ';
}
console.log(output);

// Using for-of Loop ES6
output = '';
for(let employee of employees){
    output += employee.name.toUpperCase() + ' ';
}
console.log(output);

// Using for-Each Function
output = '';
employees.forEach(function(employee) {
    output += employee.name.toUpperCase() + ' ';
});
console.log(output);

// Using for-Each Arrow Function
output = '';
employees.forEach((employee) => {
    output += employee.name.toUpperCase() + ' ';
});
console.log(output);

// Filter Function
let activeEmployees = employees.filter(function(employee) {
    return employee.active;
});
console.log(activeEmployees);

let inActiveEmployees = employees.filter(function(employee) {
    return !employee.active;
});
console.log(inActiveEmployees);

let seniorEmployees = employees.filter(function(employee) {
    return employee.age >= 35;
});
console.log(seniorEmployees);

let juniorEmployees = employees.filter(function(employee) {
    return employee.age < 35;
});
console.log(juniorEmployees);
