const fs = require('fs');
const mod = require('./module');

var v = JSON.parse(fs.readFileSync('files/data.json', 'utf8'));
var res = mod.func(v[0], v[1], v[2]);
console.log(res);


for (let i = 0; i < 3; ++i)
for (let j = 0; j < 3; ++j)
for (let k = 0; k < 3; ++k)
{
	console.log(i, j, k);
}