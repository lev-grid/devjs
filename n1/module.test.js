const fs = require('fs');
const mod = require("./module");

var testData = (z, otr) => {
	for (let o in otr) {
		if (otr[o].r == z) return true;
		if (z <= otr[o].mr && z >= otr[o].br) return true;
		if (z <= otr[o].mr && otr[o].br == undefined) return true;
		if (otr[o].mr == undefined && z >= otr[o].br) return true;
	}
	return false;
};
var testString = obj => {
	var str = `Тестовый набор:`;
	for (let i = 0; i < obj.length; ++i) {
		switch (obj[i].name) {
			case "disc":
				if (obj[i].data.min == obj[i].data.max)
					str += `\n\tкусок ${1+i}: ${obj[i].data.max} (вероятность ${obj[i].prob}%)`;
				else
					str += `\n\tкусок ${1+i}: дискретное от ${obj[i].data.min} до ${obj[i].data.max} (вероятность ${obj[i].prob}%)`;
				break;
			case "ravn":
				str += `\n\tкусок ${1+i}: равномерное от ${obj[i].data.min} до ${obj[i].data.max} (вероятность ${obj[i].prob}%)`;
				break;
			case "norm":
				str += `\n\tкусок ${1+i}: нормальное с центром в ${obj[i].data.mean}, дисперсия ${obj[i].data.disp}, мин ${obj[i].data.min}, макс ${obj[i].data.max} (вероятность ${obj[i].prob}%)`;
				break;
			case "expo":
				str += `\n\tкусок ${1+i}: экспоненциальное, лямбда ${obj[i].data.l} (вероятность ${obj[i].prob}%)`;
				break;
		}
	}
	return str;
}

var tests = JSON.parse(fs.readFileSync('files/tests.json', 'utf8'));

tests.forEach(t => {
	it(testString(t.v), () => {
		for (let i = 0; i < 4000; ++i) {
			z = mod.func(t.v);
			if (!testData(z, t.res)) {
				throw new Error(`Ошибка в значении ${z}`);
			}
		}
	});
});