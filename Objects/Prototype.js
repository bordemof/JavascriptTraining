if (typeof Object.create != 'function') {
	Object.create = function(o) {
		var F = function() {};
		F.prototype = o;
		return new F();
	};
}

var another_stooge = Object.create(stooge);
another_stooge['first-name']  = 'Bubba';
another_stooge['middle-name'] = 'Jr.';
another_stooge.nickname 	  = 'FisherBub';

stooge.profession = "Ping-Pong player";
another_stooge.profession		//"Ping-Pong Player"
