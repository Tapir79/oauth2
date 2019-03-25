// this is the orginal passport npm module
const passport = require('passport');

module.exports = app => {

    // router handler
    // when someone visits route /auth/google he is directed to google authentication
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // gets the code after first authentication and the authetication happens with the secret token code
    // attempt to turn the code into google profile
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard');
        });

    app.get('/api/logout', (req, res) => {
        // this will destroy the cookie
        req.logout();
        // this returns empty user, req.user is destroyed in the cookie
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};


