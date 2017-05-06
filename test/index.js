/*jshint esversion: 6 */

// import the server (being conscious of the possibility of a developer instance at 1337)
process.env.PORT = 7331;
var NCIServer = require('../server.js');
var server = new NCIServer();
server.start();

// require the source for testing (everything is globalized)
require('../cloud');

// Using Expect style
const {expect} = require('chai');
global.expect = expect;

// import the test suite one by one
require('./pfobjects');
require('./helpers');
require('./event-handlers');
require('./functions');
require('./jobs');
