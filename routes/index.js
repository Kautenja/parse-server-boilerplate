/* jshint esversion: 6 */
const path = require('path');
const express = require('express');

/**
 * Setup routes for the given app
 * @param  {express} app an express app to setup routes for
 */
module.exports = function(app) {
    // // Serve static assets from the /public folder
    // app.use('/public', express.static(path.join(__dirname, '/public')));
    //
    // // setup routes here
    // app.get('/', function(req, res) {
    //   res.status(200).send('Make sure to star the parse-server repo on GitHub!');
    // });
    //
    // // There will be a test page available on the /test path of your server url
    // // Remove this before launching your app
    // app.get('/test', function(req, res) {
    //   res.sendFile(path.join(__dirname, '/public/test.html'));
    // });
};
