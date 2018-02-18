var login = require('./login');
//var signup = require('./signup');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;
module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ', user)
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('Deserializing user:',user);
            done(err, user);
        });
    });

    // Setting up Passport Strategies for Login and SignUp/Registration
    login(passport);
   // signup(passport);




        passport.use('local-signup', new LocalStrategy({
                usernameField : 'email',
                passwordField : 'password',
             //   emailField: 'email',
                passReqToCallback:true
            },
            function(req,email, password, done) {
                findOrCreateUser = function () {


                    //find a user in Mongo with provided username
                    User.findOne({'local.email': email},
                        function (err, user) {
                            if (err) {
                                return done(err);
                                console.log('Error Sign up: ' + err);
                            }
                            if (user) {
                                console.log('User already exist: ' + err);
                                return done(null, false,
                                    req.flash('SignUpMessage', 'user already exists'));
                            } else {
                                //if no user then we need to create new user
                                var newUser = new User();
                                //set user credentials
                                newUser.local.email = email;
                                newUser.local.password = password;
                                newUser.local.username = req.body.username;
                                newUser.local.fullName = req.body.fullName;
                                newUser.local.country = req.body.country;
                                newUser.local.position = req.body.position;
                                newUser.local.sport = req.body.sport;
                                newUser.local.gender = req.body.gender;
                                console.log("post received: %s %s", email, password );
                                //save the new user

                                                        newUser.save(function (err, res) {
                                                            if (err) {
                                                                console.log('Error in saving user:' + err);
                                                                throw err;

                                                            }
                                                            console.log('User Registration successful');
                                                            console.log(res);
                                                            return done(null, newUser);
                                                        });
                            }
                        });
                };

                // Delay the execution of findOrCreateUser and execute the method
                // in the next tick of the event loop
                process.nextTick(findOrCreateUser);
            }));



};