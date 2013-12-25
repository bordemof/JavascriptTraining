var add = fucntion (a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name   : 'TypeError',
			message: 'add needs numbers'
		};
	}
	return a + b;
}

var try_it = function () {
	try_it {
		add("seven");
	} catch (e) {
		document.writeln(e.name + ': ' + e.message);
	}
}

try_it();