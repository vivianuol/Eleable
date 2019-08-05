//we import passport packages required for authentication
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

//we will need the models folder to check passport again
var db = require("../models");

//Telling passport we want to use a Local Strategy,
//in other words, we want login with a username/email and password.
passport.use(new LocalStrategy(
    // user will sign in using email, rather than username.
    {
        usernameField: "email"
    },
    function(email, password, done) {
        //when user tries to sign in this code runs
        db.User.findOne({
            where: {
                email: email
            }
        }).then(function(dbUser){
            //if there is no user with the given email
            if(!dbUser) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }

            return done(null, dbUser);
        });
    }
));

//In order to help keep authentication state across HTTP requests, sequelize needs to serialize and deserialize the user.
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(obj, cb){
    cb(null, obj);
})

// exporting configured passport
module.exports = passport;