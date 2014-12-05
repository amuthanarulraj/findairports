var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    port = process.env.PORT || 8080,
    dbURL = 'mongodb://localhost:27017/findairports';

//Initializing db connection
mongoose.connect(dbURL);

app.set('port', port);

//Bootstraping controllers and models
require('./server/bootstrap')(app);

app.listen(port, function () {
    console.log('FindAirports server running on port ' + port);
});

module.exports = app;
