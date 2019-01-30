// Spread Operator // ...
let array1 = [10,20,30,40];
let array2 = [...array1,50,60,70];
console.log(array2);

// Create a copy of an Array
let arr1 = [10,20,30,40];
let arr2 = [...arr1];
console.log(arr2);

// Spread operator for objects
let person1 = {
    address: {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

let person2 = {
    name : 'Rajan',
    age : 25,
    course : 'Engineering',
    ...person1
};
console.log(person2);

// Filter using spread operator
let technologies = ['html','css','javascript'];

let abc = [...technologies.filter((e)=> e.length > 3)];
console.log(abc);
