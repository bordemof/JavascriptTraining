typeof flight.number		//'number'
typeof flight.status		//'string'
typeof flight.arrival		//'object'
typeof flight.manifest		//'undefined'

typeof flight.toString		//'function'
typeof flight.constructor	//'function'

flight.hasOwnProperty('number')			//true
flight.hasOwnProperty('constructor')	//false