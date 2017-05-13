module.exports.func = (v1, v2, v3) => {
	var data = [v1, v2, v3], len = v2.length, res = {};

	for (let i = 0; i < len; ++i) for (let j = 0; j < len; ++j) for (let k = 0; k < len; ++k) {
		var otst = [i, j, k], pole = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], sum = 0, o;
		for (let i = 0; i < 3; ++i) for (let j = 0; j < 3; ++j) pole[j][i] = data[i][(otst[i]+j)%len];

		o = pole[1][1]
		if (pole[0][0] == o && pole[2][2] == o) sum += o;
		if (pole[0][2] == o && pole[2][0] == o) sum += o;
		if (pole[0][1] == o && pole[2][1] == o) sum += o;
		if (pole[1][0] == o && pole[1][2] == o) sum += o;
		o = pole[0][0];
		if (pole[0][1] == o && pole[0][2] == o) sum += o;
		if (pole[1][0] == o && pole[2][0] == o) sum += o;
		o = pole[2][2];
		if (pole[0][2] == o && pole[1][2] == o) sum += o;
		if (pole[2][0] == o && pole[2][1] == o) sum += o;

		if (sum != 0) {
			if (!res[sum]) res[sum] = [];
			res[sum].push(otst);
		}
	}
	return res;
}