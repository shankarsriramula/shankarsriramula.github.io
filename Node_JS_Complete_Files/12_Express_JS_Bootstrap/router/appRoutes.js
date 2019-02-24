const path = require('path');
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let mapRoutes = (app) => {

    // for home page
    app.get('/',(request,response) => {
        response.render(path.join(__dirname, '..' , 'views' , 'index'));
    });

    // for about page
    app.get('/about',(request,response) => {
        response.render(path.join(__dirname, '..' , 'views' , 'about'));
    });

    // for services page
    app.get('/services',(request,response) => {
        response.render(path.join(__dirname, '..' , 'views' , 'services'));
    });

    // for contact page GET Request
    app.get('/contact', (request,response) => {
        response.render(path.join(__dirname, '..' , 'views' , 'contact'));
    });

    // for contact page POST Form Submission Request
    app.post('/contact', urlencodedParser,(request,response) => {
        if (!request.body) return response.sendStatus(404);
        let formData = request.body;
        console.log(formData);
        response.render(path.join(__dirname, '..' , 'views' , 'contact-success') , {user : formData});
    });

    // for profile page
    app.get('/profile',(request,response) => {
        response.render(path.join(__dirname, '..' , 'views' , 'profile'),{param : 'Shankar'});
    });

    // for profile page with params
    app.get('/profile/:name',(request,response) => {
        let param = request.params.name;
        console.log(param);
        response.render(path.join(__dirname, '..' , 'views' , 'profile'),{ param : param});
    });

    // PageNotFound
    app.use((request,response) => {
        response.render(path.join(__dirname, '..' , 'views' , '404'));
    });
};

module.exports = {
    mapRoutes
};