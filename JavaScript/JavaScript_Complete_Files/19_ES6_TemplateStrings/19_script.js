// Get the HTML elements
let tableBody = document.querySelector('#table-body');

let employee = {
    name : 'John',
    age : 35,
    designation : 'Manager',
    company : 'Infosys'
};

// With String Concatenation
let theStr = "<tr>" +
    "<td>" + employee.name + "</td>" +
    "<td>" + employee.age + "</td>" +
    "<td>" + employee.designation + "</td>" +
    "<td>" + employee.company + "</td>" +
    "</tr>";

// With Template String
let theTemplateString = `<tr style="background-color: lightsalmon">
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                            <td>${employee.designation}</td>
                            <td>${employee.company}</td>
                        </tr>`;
tableBody.innerHTML = theTemplateString;
