var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var dbConfig = require('./db.js');
var mongoose = require('mongoose');


// connect to mongodb on localhost:27017
mongoose.connect('mongodb://localhost:27017/Talent_recruitment_website', {useMongoClient: true});
// create a model and insert new doc
var app = express();
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());// read cookies
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(session({
    secret: 'steve key',
    resave: true,
    saveUninitialized: true,
    cookie: {}
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.set('view engine', 'ejs');

// require for passport


var init = require('./config/passport');// passport for configuration
init(passport);
//routes---------------------------------------------
  var index = require('./routes/index')(passport);



//var register = require('./routes/register')(passport);
//var LoginUser = require('./routes/LoginUser')(passport);
//var home = require('./routes/home')(passport);
var about = require('./routes/about');
var service = require('./routes/service');
app.use('/', index);
//app.use('/home', home);
//app.use('/LoginUser', LoginUser);
//app.use('/register', register);
app.use('/about', about);
app.use('/service', service);

/*
//var users = require('./routes/users');






*/



/*//app.use('/users', users);


// view engine setup


// uncomment after placing your favicon in /public



// Configuring Passport



// TODO - Why Do we need this key ?
//app.use(expressSession({secret: 'mySecretKey'}));


app.set('trust proxy', 1) // trust first proxy

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates


// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);*/



/*// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// session for production version

// if(app.get('env') === 'production'){
//     app.set('trust proxy', 1) // trust first proxy
//     session.cookie.secure = true // serve secure cookies
// }

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
module.exports = app;
