var app = require('./../../app');

/**
  Generic error handler.
  
  @param {Object} the error object
  @param {Object} the request
  @param {Object} the reponse
  @param [Callback] the next middleware callback
*/
app.use(function (err, req, res, next) {
    // Handle Page not Found
    if (err.message && ~err.message.indexOf('not found')) {
        return next();
    }
    console.error(err.stack);
    res.status(500).send({ error: 'Error occurred while processing the request' });
});

/**
  Page not found error handler.
  
  @param {Object} the request
  @param {Object} the reponse
  @param [Callback] the next middleware callback
*/
app.use(function (req, res, next) {
    res.status(404).send({
        url: req.originalUrl,
        error: 'Page Not found'
    });
});