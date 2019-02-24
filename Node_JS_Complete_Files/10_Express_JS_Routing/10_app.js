const express = require('express');
const app = express();
const router = require('./router/mapRoutes');

const hostname = '127.0.0.1';
const port = 3000;

// Middleware
app.use('/public',express.static('public'));

// call the custom module
router.routes(app);

app.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}`);
});