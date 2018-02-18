var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
//var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
    function(req, email, password, done){
    //check in mongo if username and password exist

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

            // check if the username already exist

        User.findOne({'local.email' : email}, function(err, user){
            //In case of any error, return using the done method
                if(err)
                    return done(err);
                //Username does not exist, log error & redirect back

                if(!user){
                  console.log('User Not found with email' + email);
                    return done(null, false,
                        req.flash('LoginMessage', 'User not found.')
                    );
                }
                if(!user.validPassword(password)){
                   // console.log('invalid Password');
                    return done(null, false,
                        req.flash('LoginMessage', 'wrong password'));
                }
                //User and password both match , return user from
                //done method which will be treated like success
                return done(null,user);
            });
        });

}));
//var isValidPassword = function(user, password){
   // return bCrypt.compareSync(password, user.password);

};