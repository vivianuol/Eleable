//Requiring models and passport as we've configured it.
var db = require("../models");
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

        let validateEmailExist;

        db.User.findAll({
            where: {
                email: req.body.email
            }
        }).then(function(response){
            console.log("#$%^&*&^%$#$%^&*");
            console.log(response.length);
            
            if (!response.length>0) {
            db.User.create({
                email: req.body.email,
                password: req.body.password
            }).then(function (data) {
                console.log({ data: data })
                res.status(200).end();
            });
            } else {
                res.send("This email is existing. Please change a new one, or use it to log in.")
            }
        })

        // console.log({ res: res });
        // res.redirect("/login");
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

    //munipulate users(table) data
    app.get("/api/user", function (req, res) {
        console.log("------------------");
        console.log(req.user);
        if(!req.user){
          res.status(401);
        }
        
        db.User.findByPk(req.user.id).then((result)=> res.json(result))


    });

    // app.put( "/post/:id", (req, res) =>
    // db.post.update({
    //   title: req.body.title,
    //   content: req.body.content
    // },
    // {
    //   where: {
    //     id: req.params.id
    //   }
    // }).then( (result) => res.json(result))
    // );

    app.put("/api/user",(req, res) => {
        console.log("^^^^^^^^^^^^^^^^^^^^^");
        console.log(req.user);
        console.log(req.body);

        db.User.update({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            aboutme: req.body.aboutme
        },{
            where: {
                id: req.user.id
            }
        }).then((result)=>{
            console.log(result);
            if (result.affectedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
              } else {
                res.status(200).end();
              }
        })
        
        // user.update({
        //     name: req.body.name,
        //     email: req.body.email,
        //     phoneNumber: req.body.phoneNumber,
        //     address: req.body.address,
        //     city: req.body.city,
        //     state: req.body.state,
        //     zip: req.body.zip,
        //     aboutme: req.body.aboutme

        // }, req.user.id, null, function(result) {
        //     console.log(result);
        //     if (result.affectedRows == 0) {
        //         // If no rows were changed, then the ID must not exist, so 404
        //         return res.status(404).end();
        //       } else {
        //         res.status(200).end();
        //       }
        // })
    });

    app.put("/api/password",(req, res) => {
        console.log("*******************");
        console.log(req.user);
        console.log(req.body);

        db.User.update({
           password: req.body.password
        }, {
          where: {
            id: req.user.id
          }
        }).then(function(result) {
            console.log(result);
            if (result.affectedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
              } else {
                res.status(200).end();
              }
        })
    })

}