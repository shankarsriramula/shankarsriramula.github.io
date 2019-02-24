// Load npm module
const _ = require('lodash');

let array = [454,'html',654564,'test',8797,'abc',458];

let countEach = (array) => {
    let stringCount = 0;
    let numberCount = 0;
    _.forEach(array,(value) => {
        _.isString(value) ? stringCount++ : stringCount;
        _.isNumber(value) ? numberCount++ : numberCount;
    });
    return {
        stringCount : stringCount,
        numberCount : numberCount
    };
};

console.log(countEach(array));

// filter
let employees=[{name:'John',age:40,designation:'Sr. Manager',active:!0},
    {name:'Williams',age:36,designation:'Manager',active:!1},
    {name:'Rajan',age:25,designation:'Software Engineer',active:!0},
    {name:'Laura',age:23,designation:'Software Engineer',active:!1}];

let seniorEmployees = _.filter(employees,(employee) => {
    return employee.age >= 35;
});
console.log(seniorEmployees);

let juniorEmployees = _.filter(employees,(employee) => {
    return employee.age<=35;
});
console.log(juniorEmployees);