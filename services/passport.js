const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { googleClientID, googleClientSecret } = require('../config');

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // eslint-disable-next-line
      console.log({ accessToken, refreshToken, profile, done });
    }
  )
);
