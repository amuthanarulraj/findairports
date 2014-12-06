var mongoose = require('mongoose'),
    Airport = mongoose.model('Airport'),
    exports = module.exports;
    
/**
  Returns list of airports close to the search criteria.

  @param {String} the airport code
  @param Callback function
*/
exports.getCloseByAirports = function (code, done) {
    this.getAirport(code, function (airport) {
        var query = Airport.find({loc: { '$near': airport.loc, '$maxDistance': 50 }}).limit(5);
        query.exec(done);
    });
}

/**
  Returns airport model for the search criteria.

  @param {String} the airport code
  @param Callback function
*/
exports.getAirport = function (code, done) {
    Airport.findOne({ faaCode: code }, function (err, airport) {
        if (err) {
            throw err;
        }
        done(airport);
    });
}