// import express from 'express'; import syntax like in React, 
// is a module system ES2015 module. Node.js doesn't have the support for it
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// model has to be created first
require('./models/User');
// does not need a const beacuse passport.js is not returning anything
require('./services/passport');
const mongoose = require('mongoose');

// mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

// const authRoutes = require('./routes/authRoutes');
// const app = express();
// authRoutes(app);

const app = express();

app.use(
    cookieSession({
        // how long a cookie can last in the browser
        // 30 days in milliseconds days * hours * minutes * seconds * milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000 ,
        // encrypt cookie 
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// Dynamic port binding
// whenever heroku runs our app it gets this from environment variable PORT
// boolean prod || dev
const PORT = process.env.PORT || 5000

app.listen(PORT);

