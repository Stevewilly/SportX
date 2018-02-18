var express = require('express');
var router = express.Router();



module.exports = function(passport){
    router.get('/', function(req, res, next) {
        res.render('index',
            { title: 'index'
            });
    });
    //show the login form
    //show sign up form
    router.get('/LoginUser', function (req, res, next) {
        res.render('LoginUser', {message: req.flash('LoginMessage')} );

    });

//show sign up form
    router.get('/register', function (req, res) {
        res.render('register', {message: req.flash('SignUpMessage')});

    });

    //proces the login form

    // routes the registration
    // process the signup form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/LoginUser', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


// routes the registration
// process the signup form
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/register', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

   /* router.get('/home', function(req, res, next) {
        res.render('home'
           );
    });*/

   router.get('/home',  function(req, res, next) {
        res.render('home',
            {
             user : req.body.user //get the user out of session and pass to template
           }
            );
    });

router.get('/logout', function(req, res, next){
    req.logout();
    res.redirect('/LoginUser')
})

        return router;

};
function isLoggedIn (req, res, next) {

    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}

//module.exports = ro






//module.exports = router;

