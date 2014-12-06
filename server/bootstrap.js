var path = require('path'),
    fs = require('fs'),
    baseDir = __dirname,
    controllersPath = baseDir + '/controllers',
    modelsPath = baseDir + '/models';

/*
  Boot application objects.

  @method boot
  @param {string} directory path
  @private
*/
var boot = function (path) {
    fs.readdir(path, function(err, files) {
        if(err) {
            throw err;
        }
        files.forEach(function (file) {
            console.log('Adding ' + file);
            require(path + '/' + file);
        });
    });
}

//Adding Models
boot(modelsPath);
//Adding Controllers
boot(controllersPath);