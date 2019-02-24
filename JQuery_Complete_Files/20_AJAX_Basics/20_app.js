let tableBody = $('#table-body');

// JQuery AJAX
$('#jquery-ajax').click(function() {
    $.ajax({
        url : 'https://gist.githubusercontent.com/shankarsriramula/6fea616902f8021d94613411bf9904b5/raw/a683897db9c01f7a94d0c40e43d6acde71110495/employee.json',
        method : 'GET',
        success : function(data) {
            processData(data , 'bg-success');
        }
    });
});

// Javascript AJAX
$('#js-ajax').click(function () {

    // Create an AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://gist.githubusercontent.com/shankarsriramula/6fea616902f8021d94613411bf9904b5/raw/a683897db9c01f7a94d0c40e43d6acde71110495/employee.json',true);

    // Send the Request
    http.send();

    // if Server is ready with response
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200){
            let theData = http.responseText;
            processData(theData,'bg-primary');
        }
    };
});

// Process the data
let processData = (theData,color) => {
    let employees = JSON.parse(theData);
    displayEmployees(employees , color);
};

// display Employees
let displayEmployees = (employees,color) => {
    let tableRows = '';
    employees.forEach((employee) => {
        tableRows += `<tr class="${color} text-white">
                              <td>${employee.EMPId}</td> 
                         <td>
                            <img src="${employee.image}" class="img-fluid img-thumbnail">
                        </td> 
                         <td>${employee.image}</td>                   
                        <td>${employee.first_name}</td>
                        <td>${employee.last_name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.country}</td>
                        <td>${employee.city}</td>
                        <td>${employee.state}</td>
                        
                       
                      </tr>`;
    });
    tableBody.empty().append(tableRows);
};