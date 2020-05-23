var Chance = require('chance');
var chance = new Chance();

var Express = require('express');
var app = Express();

app.get('/', function(req, res) {
    res.send(nextTrip());
});

app.listen(9090, function() {
    console.log('Accepting HTTP requests on port 9090!');
});

function nextTrip(){

	var trips = [];
	
	for(var i = 0; i < 15; ++i){
		trips.push({
            
            'country' : chance.country({ full: true }),
            'adress'    : chance.address(),
            'altitude' : chance.altitude({ max: 1000 }),
            'coordinate' : chance.coordinates(),
		});
	}
	console.log(trips);
	return trips;
}
 