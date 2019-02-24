const http = require('http');
const fs = require('fs');
const path = require('path');

let hostname = '127.0.0.1';
let port = 3000;

let server = http.createServer((request,response) => {
    let url = request.url;
    console.log(url);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    if(url === '/'){
        fs.readFile(path.join(__dirname,'home.html'),'utf8',(err,data) => {
            response.end(data);
        });
    }
    else{
        response.end(`<h1 style="color: red">Page Not Found</h1>`);
    }
});

server.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}`);
});