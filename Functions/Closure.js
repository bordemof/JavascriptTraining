var myObject = function () {
	var value = 0;

	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	};
}();

var quo = function (status) {
	return {
		get_status: function () {
			return status;
		}
	};
};

var MyQuo = quo("amazed");

document.writeln(myQuo.get_status());

var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if (level < 15 ) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};
fade(document.body);

var add_the_handlers = function (nodes) {
	nodes[i].onclick = function (i) {
		return function (e) {
			alert(e);
		}(i);
	}
};