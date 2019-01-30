//Creation of a function to produce Employee Object
function createEmployee(firstName,lastName,gender,designation){
    let employeeObj = {};
    employeeObj.firstName = firstName;
    employeeObj.lastName  = lastName;
    employeeObj.gender    = gender;
    employeeObj.designation=designation;
    return employeeObj;
}
let employee = createEmployee("Ram","Raju",35,"Software Engineer",);
console.log(employee);