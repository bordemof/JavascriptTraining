stooge["first-name"] 		//"Forrest"
flight.departure.IATA 		//"SYD"
stooge["middle-name"]		//undefined
flight.status				//undefined
stooge["FIRST-NAME"]		//undefined

var middle = stooge["middle-name"] ||  "(none)";
var status = flight.status || "unknown";

flight.equipment							//undefined
flight.equipment.model						//throw "TypeError"
flight.equipment && flight.equipment.model	//undefined

