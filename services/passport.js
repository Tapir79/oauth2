const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// load schema from mongoose
const User = mongoose.model('users');

// existingUser from callback is passed here as user
// this generates the identifying piece of info
// done is the callback after we have done some work
passport.serializeUser((user, done) => {
    // user.id that identifies the user. Not the profile.id
    // this is the mongoDB oid. _id.oid, id is the shortcut
    // passport will stuff the user.id into a cookie  
    done(null, user.id);
});

// we get what had been in the cookie, turn the cookie id into mongoose user
passport.deserializeUser((id, done) => {
    // asynch, returns a promise
    // user = what we pull out of the database 
    User.findById(id)
        .then(user => {
            // error, not error
            done(null, user);
        })
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id })

            if (existingUser) {
                // we already have a record with the given profile ID
                // null = everything went fine
                // return will not run anything else inside this function (and we don't need else)
                return done(null, existingUser);
            }
            // async, we call done only after the user is really saved, this is a promise
            // user = what the save returns 
            const user = await new User({ googleId: profile.id }).save();
            done(null, user);

        }
    )
);