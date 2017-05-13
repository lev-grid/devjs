const random = require('random-js')();

var fn = {
	disc: function(data) {
		return random.integer(data.min, data.max);
	},
	ravn: function(data) {
		return random.real(data.min, data.max, true);
	},
	norm: function(data) {
		var u, v, s, res;
		do {
			u = fn.ravn({"min": -1, "max": 1});
			v = fn.ravn({"min": -1, "max": 1});
			s = u*u+v*v;
		} while (s > 1 || s == 0);
		res = Math.sqrt(-2*Math.log(s)/s)*v*Math.sqrt(data.disp)+data.mean;
		res = res < data.min ? data.min : res;
		res = res > data.max ? data.max : res;
		return res;
	},
	expo: function(data) {
		return -Math.log(fn.ravn({"min": 0, "max": 1}))/data.l;
	}
}

module.exports.func = function(v) {
	var sd = random.real(0, 100, false);
	var bs = 0, ps = 0, res;
	for (let i = 0; i < v.length; ++i) {
		ps += v[i].prob;
		if (bs <= sd && sd < ps) {
			res = fn[v[i].name](v[i].data);
			break;
		}
		bs = ps;
	}
	return res;
}