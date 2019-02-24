const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let employees = [];

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Express PUG' , page : 'home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
    res.render('about', { pageTitle: 'About Us' , page : 'about' });
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { pageTitle: 'Contact Us' ,  page : 'contact', employees : employees  });
});

/* POST Contact Form Handling . */
router.post('/register',urlencodedParser, function(req, res, next) {
    let employee = req.body;
    employees.push(employee);
    res.render('contact', { pageTitle: 'Contact Us' ,  page : 'contact' , employees : employees  });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
    let employees=[{name:'John',age:40,designation:'Sr. Manager',active:!0},{name:'Williams',age:36,designation:'Manager',active:!1},{name:'Rajan',age:25,designation:'Software Engineer',active:!0},{name:'Laura',age:23,designation:'Software Engineer',active:!1}];
    res.render('services', { pageTitle: 'Services We Provide' ,  page : 'services' , employees : employees});
});

module.exports = router;
