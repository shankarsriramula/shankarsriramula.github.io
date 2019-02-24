//Object , Arrays , Functions
let employees = [
    {
        name : 'John',
        age : 35,
        designation: true
    },
    {
        name : 'Williams',
        age : 36,
        designation:'Manager',
        active : false
    },
    {
        name : 'Rajan',
        age : 26,
        designation:'Manager',
        active : true
    },
    {
        name : 'Laura',
        age : 24,
        designation:'Manager',
        active : false
    },
];

//Filter
let seniorEmployees = employees.filter((employees) =>{
   return employees.age>35
});
console.log(seniorEmployees);