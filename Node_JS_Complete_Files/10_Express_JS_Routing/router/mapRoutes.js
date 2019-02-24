const path = require('path');
// for handling the form data
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let routes = (app) => {
    // for Static HTML file
    app.get('/',(request,response) => {
        response.sendFile(path.join(__dirname, '..' , 'views' ,'index.html'));
    });

    app.get('/about',(request,response) => {
        response.sendFile(path.join(__dirname ,'..' ,  'views', 'about.html'));
    });

    app.get('/services',(request,response) => {
        response.sendFile(path.join(__dirname , '..' , 'views', 'services.html'));
    });

    app.get('/profile',(request,response) => {
        response.sendFile(path.join(__dirname , '..' , 'views', 'profile.html'));
    });

    // Query Parameters
    app.get('/profile/:id',(request,response) => {
        let id = request.params;
        console.log(id);
        response.sendFile(path.join(__dirname , '..' , 'views', 'profile.html'));
    });

    // to get the contact page
    app.get('/contact',(request,response) => {
        let queryString = request.query;

        response.sendFile(path.join(__dirname , '..' , 'views', 'contact.html'));
    });


    // for form submission
    app.post('/contact', urlencodedParser,(request,response) => {
        let userData = {
            username : request.body.username,
            password : request.body.password
        };
        console.log(userData);
        response.sendFile(path.join(__dirname , '..' , 'views', 'contact.html'));
    });

    // PageNotFound
    app.use((request,response) => {
        response.send(`<h1 style="color: red">Page Not Found</h1>`);
    });
};

module.exports = {
    routes
};