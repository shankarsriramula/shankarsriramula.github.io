const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// for Static HTML file
app.get('/',(request,response) => {
    response.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/about',(request,response) => {
    response.sendFile(path.join(__dirname, 'about.html'));
});
app.get('/services',(request,response) => {
    response.sendFile(path.join(__dirname, 'services.html'));
});
app.get('/Contact',(request,response) => {
    response.sendFile(path.join(__dirname, 'Contact.html'));
});

// for Download file
app.get('/download',(request,response) => {
    response.download(path.join(__dirname,'ui_qns.pdf'));
});

// for JSON Data
let mobile = {
    brand : 'Apple',
    color : 'silver',
    RAM : '16GB',
    isInsured : false,
    price : 35000
};
app.get('/json',(request,response) => {
    response.json(mobile);
});

// PageNotFound
app.use((request,response) => {
    response.send(`<h1 style="color: red">Page Not Found</h1>`);
});

app.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}`);
});