/*jshint esversion: 6 */

/// Using Expect style
const {expect} = require('chai');

/**
 * A class for mocking parse cloud responses with expectations.
 */
module.exports = class MockResponse
{
    /**
     * Construct a new MockResponse
     * expectedResult @type {Object} [the expected object passed to a success
     *                                call.]
     * expectedError @type {Object} [the expected error object passed to an
     *                               error call.]
     */
    constructor(expectedResult='', expectedError='')
    {
        this.expectedResult = expectedResult;
        this.expectedError = expectedError;
    }

    /**
     * Send a success message back to the client (i.e. expect a certain object)
     * result @type {Object} [the object passed back to the client on success.]
     */
    success(result)
    {
        // compare the passed in value to the expected one
        expect(result).to.deep.equal(this.expectedResult);
    }

    /**
     * Send an error message back to the client (i.e. expect a certain object)
     * result @type {Object} [the object passed back to the client on error.]
     */
    error(message)
    {
        // compare the passed in value to the expected one
        expect(message).to.deep.equal(this.expectedError);
    }
};
