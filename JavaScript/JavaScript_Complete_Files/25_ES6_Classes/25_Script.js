// Person Class
class Person {

    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Instance method
    print() {
        console.log(`FirstName : ${this.firstName} 
                     LastName: ${this.lastName}
                     Age : ${this.age}`);
    }

    // Static method
    static getDate() {
        console.log(new Date());
    }
}

class Employee extends Person{
    constructor(firstName,lastName,age,designation){
        super(firstName,lastName,age);
        this.designation = designation;
    }
    print(){
        console.log(`FirstName : ${this.firstName} 
                     LastName: ${this.lastName}
                     Age : ${this.age}
                     Designation: ${this.designation}`);
    }
}
let employee = new Employee('John','Wilson',35,'Manager');
employee.print();

