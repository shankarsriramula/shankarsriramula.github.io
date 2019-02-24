const express = require('express');
const app = express();
const path = require('path');
const router = require('./router/appRoutes');

const hostname = '127.0.0.1';
const port = 3000;

// Static files
app.use('/public', express.static('public'));

// Set the View Engine EJS
app.set('view engine', 'ejs');

// call routing
router.mapRoutes(app);

app.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}`);
});