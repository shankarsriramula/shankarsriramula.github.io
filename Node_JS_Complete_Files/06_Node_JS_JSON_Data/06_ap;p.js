const fs = require('fs');
const path = require('path');

let employees=[{name:'John',age:40,designation:'Sr. Manager',active:!0},
    {name:'Williams',age:36,designation:'Manager',active:!1},
    {name:'Rajan',age:25,designation:'Software Engineer',active:!0},
    {name:'Laura',age:23,designation:'Software Engineer',active:!1}];

// Create a directory
fs.mkdir(path.join(__dirname,'json'),{ recursive: true },(err) => {
    if(err) throw err;
    fs.writeFile(path.join(__dirname,'json','employee.json'),JSON.stringify(employees),'utf8',(err) => {
        if(err) throw err;
        console.log('data added');
    });
});

// Read the JSON Data add to another file
fs.mkdir(path.join(__dirname,'new_json'),{ recursive: true },(err) => {
    if(err) throw err;
    fs.readFile(path.join(__dirname,'json','employee.json'),'utf8',(err,data) => {
        fs.writeFile(path.join(__dirname,'new_json','new_employee.json'),data,'utf8',(err) => {
            if(err) throw err;
            console.log('data added');
        });
    });
});

