const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const getDB = require('../database/database').getDB;

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET raise Complaints page. */
router.get('/raise', function(req, res, next) {
    res.render('raise_complaints');
});

/* Post raise Complaints Form Submission page. */
router.post('/raise',urlencodedParser, function(req, res, next) {
    let complaint = {
        username: req.body.username,
        account: req.body.account,
        issue: req.body.issue,
        priority: req.body.priority,
        description: req.body.description
    };
    // Insert data to database
    const db = getDB();
    db.collection('complaints').insertOne(complaint,(err , data) => {
        if(err) throw err;
    });
    res.render('raise_complaints' );
});

/* GET List of Complaints page. */
router.get('/list', function(req, res, next) {

    // get the data from the database
    const db = getDB();
    db.collection('complaints').find({}).toArray((err,complaints) => {
        if(err){
            return console.log(err);
        }
        res.render('list_complaints', {complaints : complaints});
    });
});

module.exports = router;
