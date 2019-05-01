const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

const { port, mongoURI, cookieKey } = require('./config');
const authRoutes = require('./routes/authRoutes');

// Load Mongoose models
require('./models/User');

require('./services/passport');

mongoose.connect(mongoURI, { useNewUrlParser: true });
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.listen(port);
