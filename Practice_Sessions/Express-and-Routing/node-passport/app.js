const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();
const PORT = process.env.port || 5000;

//Passport Config
require('./config/passport')(passport);

//DB Config
const db = require('./config/keys').MongoURI;

//Mongo Connection
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//EJS Middleware
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended: false})); //Get data from forms through req.body

//Express Session Middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect flash middleware
app.use(flash());

//Global Variables. Coming from flash, we create message for users after registering
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

//Routes
app.use('/', require('./routes/index'));
app.use ('/users', require('./routes/users'));

app.listen(PORT, console.log(`App listening on https://localhost:${PORT}`)); 