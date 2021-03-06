const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');

const { googleClientID, googleClientSecret } = require('../config');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await User.findById(userId);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const newUser = await new User({ googleId: profile.id }).save();
        return done(null, newUser);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
