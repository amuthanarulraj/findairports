var app = require('./../../app'),
    airportService = require('./../services/AirportService'),
    geoJsonService = require('./../services/GeoJsonService');

/*
  Returns geojson of airports close to search airport code.
*/
app.get('/airportsearch/:code', function (req, res, next) {
    var faaCode = req.param('code'); 

    airportService.getCloseByAirports(faaCode, function (err, data) {
        if (err) {
            return next(err);
        }
        var geojson = geoJsonService.airportListGeoJson(data);
        res.set('Content-Type', 'application/vnd.geo+json');
        res.status(200).send(geojson);
    });
});