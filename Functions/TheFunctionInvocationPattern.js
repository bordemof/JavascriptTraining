var sum = add(3, 4);	//sum is 7

//Augmented myObject with a double method

myObject.double = function () {
	var that = this;

	var helper = function () {
		that.value = add(that.value, that.value);
	}

	helper();
};

myObject.double();
document.writeln(myObject.getValue());	//7

