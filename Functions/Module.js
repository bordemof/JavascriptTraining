String.method('deentityify', function () {
	var entity = {
		quot: '"',
		lt	: '<',
		gt  : '>'
	};	
	return function () {
		return this.replace(/&([^&;]+);/g,
			function (a, b) {
				var r = entity[b];
				return typeof r === 'string' ? r : a;
			}
		);
	};
}());
document.writeln('&lt;&quot;&gt;'.deentityify()); // <">

var serial_maker = function() {
	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function (p) {
			prefix = String(p);
		},
		set_seq: function (s) {
		seq = s;
		},
		gensym: function ( ) {
		var result = prefix + seq;
		seq += 1;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix = ('Q';)
seqer.set_seq = (1000);
var unique = seqer.gensym( );
// unique is "Q1000"