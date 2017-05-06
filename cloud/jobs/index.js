/* jshint esversion: 6 */

// iterate over the files in this directory
require('fs').readdirSync(__dirname).forEach(function(file) {
    // dont include this file
    if (file == 'index.js') return;
    // dont include non javascript files
    if (file.indexOf(".js") == -1) return;

    // remove the '.js' extension
    var functionName = file.replace('.js','');
    // import the cloud function
    var cloudFunction = require('./' + file);
    // define the parse cloud job
    Parse.Cloud.job(functionName, cloudFunction);
});
