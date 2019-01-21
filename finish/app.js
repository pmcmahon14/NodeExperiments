var flight = require('./flight');

flight.setOrigin('Kensington');
flight.setDestination('London');
flight.setNumber(356);

console.log(flight.getInfo());

//potential problem with caching
var anotherFlight = require('./flight');

console.log(anotherFlight.getInfo());