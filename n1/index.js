const mod = require('./module');
const fs = require('fs');

var data = JSON.parse(fs.readFileSync('files/data.json', 'utf8'));

var res = mod.func(data);

console.log(res);