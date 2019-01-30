/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/

let mobile = {
    brand : 'Apple',
    color : 'Silver',
    RAM : '16GB',
    price : 30000,
    isInsured : false
};
console.log(mobile);

// access the properties of an object
console.log(mobile.brand);

// [] notation
console.log(mobile['brand']);

// add properties
mobile.screensize = '5Inch';
console.log(mobile);
mobile.androidversion = '8.1';
console.log(mobile);

// Nested Objects
let student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);

// access nested object data
console.log(student.address.city);

// add properties to an object
console.log(student.address);
student.address.street = 'Ameerpet';
console.log(student.address);

// Delete a property
console.log(student);
delete student.course;
console.log(student);
delete  student.address;
console.log(student);

// JSON
// JSON.stringify() to convert an object to String
let employee = {
    name : 'John',
    age : 35,
    designation : 'Manager'
};
console.log(employee);
let employeeStr = JSON.stringify(employee);
console.log(employeeStr);

let someStr = '{"name":"John","age":35,"designation":"Manager"}';
let employeeObj = JSON.parse(someStr);
console.log(employeeObj);


