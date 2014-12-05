module.exports = function (app) {
    
    var airportService = require('./../services/AirportService')(app),
        geoJsonService = require('./../services/GeoJsonService')();
    
    /*
      Returns geojson of airports close to search airport code.
    */
    app.get('/airportsearch/:code', function (req, res) {
        var code = req.param('code'),
            statusCode = 200, 
            resData; 
        
        airportService.getCloseByAirports(code, function (err, data) {
            if (err) {
                statusCode = 500;
                resData = err;
            } else {
                //Convert to GeoJson
                resData = geoJsonService.airportListGeoJson(data);
            }
            res.set('Content-Type', 'application/vnd.geo+json');
            res.status(statusCode);
            res.send(resData);
            res.end();
        });
    });
}