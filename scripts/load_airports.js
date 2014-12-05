var mongoose = require('mongoose'),
    fs = require('fs'),
    stream = require('stream'), 
    eventStream = require("event-stream");
    dbURL = 'mongodb://localhost:27017/findairports';

//Initializing db connection
mongoose.connect(dbURL);

//Bootstrap airport model
require(__dirname + '/../server/models/Airport');

var User = mongoose.model('Airport'),
    sanitze = function (token) {
        return token.substring(1, token.length -1);
    };

var readStream = fs.createReadStream(__dirname + '/../data/airports.dat')
    .pipe(eventStream.split())
    .pipe(eventStream.mapSync(function(line){

        // pause the readstream
        readStream.pause();
        if(line && line.length > 0) {
            var tokens = line.split(','),
                latitude = Number(sanitze(tokens[6])),
                longitude = Number(sanitze(tokens[7]));

            var airport = new User({
                airportId: tokens[0],
                name: sanitze(tokens[1]),
                city: sanitze(tokens[2]),
                country: sanitze(tokens[3]),
                faaCode: sanitze(tokens[4]),
                latitude: latitude,
                longitude: longitude
            });

            //Save airport only if latitude and longitude are present
            if (!isNaN(latitude) && !isNaN(longitude)) {
                airport.save(function (err) {
                    if (err) {
                        console.log('Error saving airport: ' + err);
                    }
                });
                console.log('Saved airport: ' + airport.name);
            } else {
                console.log('Skipping airport: ' + airport.name);
            }
        }
        readStream.resume();
    })
    .on('error', function(){
        console.log('Error occured while reading the airports file.');
        process.exit(1);
    })
    .on('end', function(){
        console.log('Loaded all airports successfully.');
        process.exit(0);
    })
);