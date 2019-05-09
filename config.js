const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  MONGO_URI,
  COOKIE_KEY,
  PORT,
} = process.env;

module.exports = {
  googleClientID: GOOGLE_CLIENT_ID,
  googleClientSecret: GOOGLE_CLIENT_SECRET,
  mongoURI: MONGO_URI,
  cookieKey: COOKIE_KEY,
  port: PORT || 5000,
};
