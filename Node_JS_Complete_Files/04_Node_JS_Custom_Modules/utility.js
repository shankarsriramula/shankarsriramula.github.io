const fs = require('fs');

let sayGoodMorning = (name) => {
    return `Good Morning ${name}`;
};

let saveFile = (message,filename) => {
    fs.writeFile(filename,message,'utf8',(err)=> {
        if(err) throw err;
        console.log('Add to file');
    });
};

module.exports = {
    sayGoodMorning,
    saveFile
};