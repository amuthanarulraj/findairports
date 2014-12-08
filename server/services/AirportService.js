var mongoose = require('mongoose'),
    Airport = mongoose.model('Airport'),
    exports = module.exports;
    
/**
  Returns list of airports close to the search criteria.

  @param {String} the airport code
  @param Callback function
*/
exports.getCloseByAirports = function (faaCode, done) {
    this.getAirport(faaCode, function (err, airport) {
        if (err) {
            done(err, null);
        } else if (airport) {
            var query = Airport.find({loc: { '$near': airport.loc, '$maxDistance': 50 }}).limit(5);
            query.exec(done);
        } else {
            done({ message: faaCode + ' airport not found.' }, null);
        }
    });
}

/**
  Returns airport model for the search criteria.

  @param {String} the airport code
  @param Callback function
*/
exports.getAirport = function (faaCode, done) {
    Airport.findOne({ faaCode: faaCode }, function (err, airport) {
        done(err, airport);
    });
}