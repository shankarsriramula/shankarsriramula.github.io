// Load Node JS Core Modules
const os = require('os');
const fs = require('fs');

// Total Memory RAM
let totalMemory = os.totalmem();
console.log(`Total Memory : ${totalMemory}`);

// Free Memory of RAM
let freeMemory = os.freemem();
console.log(`Free Memory : ${freeMemory}`);

// Computer Name
let computerName = os.hostname();
console.log(`ComputerName : ${computerName}`);

// Home Directory
let homeDir = os.homedir();
console.log(`Home Dir : ${homeDir}`);

// Admin Name
let adminName = os.userInfo().username;
console.log(`Admin Name : ${adminName}`);

// File System Module
fs.writeFile('data.txt','Good Morning','utf8',(err) => {
    if(err) throw err;
    console.log('Data added to a file');
});

fs.readFile('data.txt','utf8',(err,data) => {
    if(err) throw err;
    console.log(data);
});
// JSON Files
let student = {
    name : 'Shankar',
    age : 26,
    course : 'Degree',
    college : {
        name : 'Andhra University',
        location : 'Vizag',
        state : 'AP'
    }
};

// Write to JSON file
let stdString = JSON.stringify(student);
fs.writeFile('student.json',stdString,'utf8',(err) => {
    if(err) throw err;
    console.log('add to file');
});

// Read from JSON file
fs.readFile('student.json','utf8',(err,data) => {
    if(err) throw err;
    let studentObj = JSON.parse(data);
    console.log(studentObj);
});
