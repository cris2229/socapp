/**
 * Created by Vasquez on 6/24/2020.
 */
const passport = require("passport");
var GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
        clientID: '546717923007-92gii1n83c2qsdvjnrucgdaqmcnlj36h.apps.googleusercontent.com',
        clientSecret: 'fht14ytYZD2QpqBPNmilAJ0t',
        callbackURL: "http://localhost:3000/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
            return done(null, profile);

    }
));