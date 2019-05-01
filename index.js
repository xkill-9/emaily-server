const express = require('express');
const mongoose = require('mongoose');

require('./services/passport');
const { port, mongoURI } = require('./config');
const authRoutes = require('./routes/authRoutes');

mongoose.connect(mongoURI, { useNewUrlParser: true });
const app = express();

authRoutes(app);

app.listen(port);
