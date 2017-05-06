/*jshint esversion: 6 */

// import the server file
var Server = require('./server.js');
var instance = new Server();
// start the server instace
instance.start();
// handle a shutdown signal by stopping the server and exiting the
// process as a callback for the server shutdown
process.on('SIGINT', function() { instance.stop(process.exit); });
