Function.method('new', function () {
	var that = Object.create(this.prototype);

	var other = this.apply(that, argumentes);

	return (typeof other === 'object' && other) || that;
});

var Mammal = function (name) {
	this.name = name;
};

Mammal.prototype.get_name = function () {
	return this.name;
};

Mamma1.prototype.says = function () {
	return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name(); 

var Cat = function (name) {
	this.name = name;
	this.saying = 'meow';
};

Cat.prototype = new Mammal();

Cat.prototype.purr = function (n) {
	var i, s = '';
	for (i = 0; i < n; i += 1) {
		if (s) {
			s += '-';
		}
		s += 'r';
	}
	return s;
};

Cat.prototype.get_name = function ( ) {
	return this.says( ) + ' ' + this.name +
			' ' + this.says( );
};

var myCat = new Cat('Henrietta');
var says = myCat.says( ); // 'meow'
var purr = myCat.purr(5); // 'r-r-r-r-r'
var name = myCat.get_name( ); //'meow Henrietta meow'

Function.method('inherits', function (Parent) {
	this.prototype = new Parent( );
	return this;
});

var Cat = function (name) {
	this.name = name;
	this.saying = 'meow';
}.
	inherits(Mammal).
	method('purr', function (n) {
		var i, s = '';
		for (i = 0; i < n; i += 1) {
			if (s) {
				s += '-';
			}
			s += r;
		}
		return s;
	}).
	method('get_name', function () {
		return this.says() + '' + this.name +
				' ' + this.says();
	});


