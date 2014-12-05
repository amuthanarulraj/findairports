var path = require('path'),
    fs = require('fs'),
    baseDir = __dirname;

module.exports = function(app) {
    var controllersPath = baseDir + '/controllers',
        modelsPath = baseDir + '/models';
    /*
      Boot application objects.
      
      @method boot
      @param {string} directory path
      @param {express} express app
      @private
    */
    var boot = function (path, app) {
        fs.readdir(path, function(err, files) {
            if(err) {
                throw err;
            }
            files.forEach(function (file) {
                var fileName = file.replace('.js', '');
                console.log('Adding ' + fileName);
                require(path + '/' + fileName)(app);
            });
        });
    }
    
    //Adding Models
    boot(modelsPath, app);
    //Adding Controllers
    boot(controllersPath, app);
}