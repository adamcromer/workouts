require('dotenv').config();
const secret = require('./secret.js');
const secretToken = secret.token.id;

const withAuth = require('./middleware.js');

const cookieParser = require('cookie-parser');

const express = require("express");
const mongoose = require("mongoose");
// const morgan  = require('morgan');

const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(morgan);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on localhost:${PORT}`);
});
