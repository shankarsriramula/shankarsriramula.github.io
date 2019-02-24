// Load Custom Module
let utility = require('./utility');

let message = utility.sayGoodMorning('John');
let fileName = 'wish.txt';

utility.saveFile(message,fileName);