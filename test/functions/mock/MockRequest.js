/*jshint esversion: 6 */

/// Using Expect style
const {expect} = require('chai');

/**
 * A class for mocking parse cloud requests.
 */
module.exports = class MockRequest
{
    /**
     * Construct a new MockRequest.
     */
    constructor()
    {
        // setup the params object
        this.params = {};
    }
};
