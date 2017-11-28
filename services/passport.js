const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');
const passport = require('passport');

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
    })
);