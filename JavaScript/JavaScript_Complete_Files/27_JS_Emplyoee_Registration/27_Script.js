class Employee {
    constructor(name,email,designation){
        this.name = name;
        this.email = email;
        this.designation = designation;
    }
}

class Company {
    static displayCompany(){
        let storedCompany = [

        ];
        storedCompany.forEach((company) => Company.addCompanyToTable(company));
    }

    static addCompanyToTable(company) {
        let tableBody = document.querySelector('#table-body');
        let row = document.createElement('tr');
        row.innerHTML = `<td>${company.name}</td>
                        <td>${company.email}</td>
                        <td>${company.designation}</td>
                        <td>
                            <a href="#" class="text-danger">
                                <i class="fa fa-times-circle fa-2x"></i>
                            </a>
                        </td>`;
        tableBody.appendChild(row);
    }

    static clearFields(){
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#designation').value = '';
    }

    static deleteRow(element){
        if(element.classList.contains('fa-times-circle')){
            element.parentElement.parentElement.parentElement.remove();
        }
    }
}

// Document Load Event
document.addEventListener('DOMContentLoaded',() => {
    Company.displayCompany();
});

// Form Submit Event
document.querySelector('#company-form').addEventListener('submit',(e) => {

    // Prevent actual form Submission
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let designation = document.querySelector('#designation').value;

    let employee = new Employee(name,email,designation);
    Company.addCompanyToTable(company);
    Company.clearFields();

});

// Delete Functionality
document.querySelector('#table-body').addEventListener('click',(e) => {
    let element = e.target;
    Company.deleteRow(element);
});