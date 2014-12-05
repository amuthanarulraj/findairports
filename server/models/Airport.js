var mongoose = require('mongoose');

//Airport model
var AirportSchema = new mongoose.Schema({
    airportId: { type: String, unique: true },
    name: { type: String },
    city: { type: String },
    country: { type: String },
    faaCode: { type: String },
    loc: []
});

AirportSchema.index({ loc: '2d' });

mongoose.model('Airport', AirportSchema);