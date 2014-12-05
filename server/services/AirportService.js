var mongoose = require('mongoose');

module.exports = function (app) {
    
    var Airport = mongoose.model('Airport');
    
    /**
      Returns list of airports close to the search criteria.
      
      @param {String} the airport code
      @param Callback function
    */
    function getCloseByAirports(code, done) {
        getAirport(code, function (airport) {
            var query = Airport.find({loc: { '$near': airport.loc, '$maxDistance': 50 }}).limit(5);
            query.exec(done);
        });
    }
    
    /**
      Returns airport model for the search criteria.
      
      @param {String} the airport code
      @param Callback function
    */
    function getAirport(code, done) {
        Airport.findOne({ faaCode: code }, function (err, airport) {
            if (err) {
                throw err;
            }
            done(airport);
        });
    }
    
    return {
        getCloseByAirports: getCloseByAirports,
        getAirport: getAirport
    }
}