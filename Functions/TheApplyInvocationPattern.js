var array = [3, 4];
var sum = add.apply(null, array);  //sum is 7

var statusObject = {
	status: 'OK'
};

var status = Quo.prototype.get_status.apply(statusObject);
