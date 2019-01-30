// get the Table Body
let tableBody = document.querySelector('#table-body');

let employees = [
    {
        name : 'John',
        age : 40,
        designation: 'Manager',
        active : true
    },
    {
        name : 'Williams',
        age : 35,
        designation: 'Tech Lead',
        active : false
    },
    {
        name : 'Rajan',
        age : 25,
        designation: 'Software Engineer',
        active : true
    },
    {
        name : 'Laura',
        age : 22,
        designation: 'Software Engineer',
        active : false
    }
];

// prepare the HTML String
let prepareHTMLString = (employees) => {
    let tableRows = '';
    let eachRow = '';
    let sno = 1;
    employees.forEach((employee) => {
        eachRow = `<tr>
                        <td>${sno}</td>
                        <td>${employee.name.toUpperCase()}</td>
                        <td>${employee.age}</td>
                        <td>${employee.designation.toUpperCase()}</td>
                        <td>${employee.active}</td>
                    </tr>`;
        tableRows += eachRow;
        sno++;
    });
    tableBody.innerHTML = tableRows;
};

let displayActive = () => {
    let activeEmployees = employees.filter((employee) => {
        return employee.active;
    });
    prepareHTMLString(activeEmployees);
};

let displayInActive = () => {
    let inActiveEmployees = employees.filter((employee) => {
        return !employee.active;
    });
    prepareHTMLString(inActiveEmployees);
};

let displaySenior = () => {
    let seniorEmployees = employees.filter((employee) => {
        return employee.age >= 35;
    });
    prepareHTMLString(seniorEmployees);
};


let displayJunior = () => {
    let juniorEmployees = employees.filter((employee) => {
        return employee.age < 35;
    });
    prepareHTMLString(juniorEmployees);
};



