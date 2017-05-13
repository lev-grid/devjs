const fs = require('fs');
const mod = require("./module");

var testString = (v1, v2, v3) => `Тестовый набор:\n\t${v1}\n\t${v2}\n\t${v3}`;
var errorString = (f, s) => `Ошибка!\n\tОжидалось: ${JSON.stringify(f)};\n\tРезультат: ${JSON.stringify(s)}.`;
var equalsObj = (f, s) => JSON.stringify(f) == JSON.stringify(s);

var tests = JSON.parse(fs.readFileSync('files/tests.json', 'utf8'));

tests.forEach(t => {
	it(testString(t.v1, t.v2, t.v3), () => {
		z = mod.func(t.v1, t.v2, t.v3);
		if (!equalsObj(t.rn, z)) {
			throw new Error(errorString(t.rn, z));
		}
	});
});