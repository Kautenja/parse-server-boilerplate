/*jshint esversion: 6 */
const mailConfig = require('./mailConfig.js');

// the endpoint to run the parse API at
module.exports.parseMount = process.env.PARSE_MOUNT || '/parse';
// the port to run the service at
module.exports.port = process.env.PORT || 1337;
// the configuration options for the server
module.exports.options = {
    // the name of the application
    appName: 'your app name',
    // the unique app id that clients use to connect
    appId: process.env.APP_ID || 'your app id',
    // the master key used to verify certain clients (keep secret)
    masterKey: process.env.MASTER_KEY || 'dev master key',

    // the endpoint to host the parse api at
    serverURL: process.env.SERVER_URL || `http://localhost:${module.exports.port}${module.exports.parseMount}`,
    // the location of the file containing cloud code functions, the '.' is
    // relative to the requiring file (not this one)
    cloud: process.env.CLOUD_CODE_MAIN || './cloud/index.js',
    // the database uri to connect to
    databaseURI: process.env.MONGO_URI || 'mongodb://localhost:27017/dev',

    // the url to include with links in the email
    // publicServerURL: `${process.env.PUBLIC_SERVER_URL}${module.exports.parseMount}`,
    // the amount of time they have to reset their password in seconds
    emailVerifyTokenValidityDuration: mailConfig.expirationTime,
    // the settings for the mail adapter for the server
    emailAdapter: mailConfig.mailAdapter,
    // setting to allow for class creation
    allowClientClassCreation: false
};
