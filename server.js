/* jshint esversion: 6 */
const path = require('path');
const express = require('express');
const ParseServer = require('parse-server').ParseServer;

// the configuration options for the server
const serverConfig = require('./config/serverConfig.js');

/**
 * This class represents the nurse check in server
 */
module.exports = class Server
{
    /**
     * Initialize a new nci server
     */
    constructor()
    {
        // start the express app
        this.app = express();
        // Configure the Parse Server API
        var parseServer = new ParseServer(serverConfig.options);
        // Serve the Parse API on the /parse URL prefix
        this.app.use(serverConfig.parseMount, parseServer);
        // setup the rest of the routes for the app
        require('./routes')(this.app);
    }

    /**
     * Start the instance
     */
    start()
    {
        // Listen for connections on the port
        this.requestServer = this.app.listen(serverConfig.port, this._didStartServer);
    }

    /**
     * Callback for when the exppress app starts running
     */
    _didStartServer()
    {
        console.log(`server running on port ${serverConfig.port}`);
    }

    /**
     * Stops the server and exits cleanly
     */
    stop(callback)
    {
        console.log('\nshutting down');
        this.requestServer.close(callback);
    }
};
