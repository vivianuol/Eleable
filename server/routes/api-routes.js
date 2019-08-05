//Requiring models and passport as we've configured it.
var db = require("../models");
var contact = require("../dbModels/contacts")
var passport = require("../config/passport");

module.exports = function (app) {
    //using passport.authenticate middleware with local strategy.
    //If user has vaid login credentials, send them to members page.
    //otherwise, user will be sent an error.
    app.post('/api/login', passport.authenticate("local"), function (req, res)
    //since we're doing a POST with javascript, we can't redirect post into a GET request.
    //so we're sending user back the route to the members page because the redirect will happen.
    {
        res.send('addressbook');

    });

    //route for signing up a user. the user's password is automatically hashed and stored securely.
    //if the user is created successfully, proceed to log in.
    //otherwise send back an error.

    app.post("/api/signup", function (req, res) {
        console.log({ req_body: req.body });

        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function (data) {
            console.log({ data: data })
        });

        console.log({ res: res });
        res.redirect("/login");
    });



    //route for getting data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        console.log(req.user);
        if (!req.user) {
            //the user is not logged in, send back an empty object
            res.json({});
        }
        else {
            //otherwise send back the user's email and id
            //sending back a password(hashed)
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });


}