const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//
let employees = [];

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });


// for Home Page
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Express EJS' , page : 'home'});
});

// for About Us Page
router.get('/about', function(req, res, next) {
    res.render('about', { pageTitle: 'About Us' ,page : 'about' });
});


// for GET Request Contact Us Page
router.get('/contact', function(req, res, next) {
    res.render('contact', { pageTitle: 'Contact Us', page : 'contact' , employees: employees });
});

// for POST Request Contact Us Page
router.post('/register', urlencodedParser,function(req, res, next) {
    let employee = req.body;
    // add employee Object to Array
    employees.push(employee);
    res.render('contact', { pageTitle: 'Contact Us', page : 'contact' , employees: employees});
});

// for Services Page
router.get('/services', function(req, res, next) {
    let employees=[{name:'John',age:40,designation:'Sr. Manager',active:!0},{name:'Williams',age:36,designation:'Manager',active:!1},{name:'Rajan',age:25,designation:'Software Engineer',active:!0},{name:'Laura',age:23,designation:'Software Engineer',active:!1}];
    res.render('services', { pageTitle: 'Services We Provide' , page : 'services' , employees : employees});
});

module.exports = router;
