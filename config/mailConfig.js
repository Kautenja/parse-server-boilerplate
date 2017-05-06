/* jshint esversion: 6 */

// make a mail adapter options block with the necessary configuration items
module.exports.mailAdapter = {
    module: require('parse-server-sendmail-template-adapter'),
    options: {
        // the address to send from
        fromAddress: 'noreply@yourdomain.com',
        // content for the verification email (for new accounts)
        verificationSubject: 'Confirm your %appname% account',
        verificationBody: 'templates/inlined/verify_email.html',
        // content for the password reset email
        passwordResetSubject: 'Reset your %appname% password',
        passwordResetBody: 'templates/inlined/reset_password.html'
    }
};
// the time before reset password links expire (in seconds)
module.exports.expirationTime = 2 * 60 * 60;
