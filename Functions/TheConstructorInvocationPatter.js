var Quo = function (string) {
	this.status = string;
}

Quo.prototype.get_status = function () {
	return this.status;
}

var myQuo = new Quo("Confused");
document.writeln(myQuo.get_status());	//"Confused"

