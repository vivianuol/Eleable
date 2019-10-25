//const express = require("express");

//var router = express.Router();

var contact = require("../dbModels/contacts")

const path = require("path");

const multer = require("multer");

module.exports = function (app) {
// multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname) + '\\..\\public\\uploads')
  },
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("image");  

// const upload = multer({dest: path.resolve(__dirname) + '\\..\\public\\uploads'}).single('image')


  // Create all our routes and set up logic within those routes where required.
  app.get("/api/contacts/", function (req, res) {
    console.log("+++++++++++++++++++");
    console.log(req.user);
    if (!req.user) {
        res.status(401);
        res.json({});
    } else {
        contact.all(req.user.id, (result) => {
            console.log("result: " + JSON.stringify(result));
            res.send(result);

        });
    }
});

  app.get("/api/contacts/:id", function (req, res) {
    console.log("------------------");

    var uid = req.user.id;
    console.log("user id: ", req.user.id);

    if(!req.user){
      res.status(401);
    }

    var id = req.params.id;
    console.log("condition ", req.params.id)

    contact.one(uid, id, function (result) {
      var ctcObject = {
        contacts:   result
      };
      //console.log(result);
      res.send(ctcObject);

    });

  });

  // new post method for all input type including "file"

  app.post("/api/contact", (req, res) => {
    upload(req, res, (err) => {
      // console.log("Request ---", JSON.stringify(req.body));
      // console.log("Request file ---", req.file.filename);
      // console.log("Request file ---", req.file.path);
      //Here you get file.
      /*Now do where ever you want to do*/

      if(!req.user) {
         res.status(401);
      }
      console.log("*********************")
      var uid= req.user.id;
      console.log("user id: ", uid);
      
      contact.create([
        "first_name", "last_name", "phone_number", "email", "social_link", "image","user_id"
      ], [
          req.body.first_name, req.body.last_name, req.body.phone_number, req.body.email, req.body.social_link,
          (req.file !== null && req.file !== undefined) ? req.file.filename : null,
          req.user.id
        ], function (result) {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        });

       });

  });

  app.put("/api/contact/:id", (req, res) => {
    console.log("^^^^^^^^^^^^^^^^^^^^^^")
    var uid= req.user.id;
    console.log("user id: ", uid);

    var id = req.params.id;
    console.log("condition ", id);
 
    upload(req, res, (err) => {
    //   // console.log("Request ---", JSON.stringify(req.body));
    //   //console.log("request ---");
    //   //console.log(req);
    //   //console.log("Request file ---", req.file);res.status(200).end();
    //   //console.log("Request file ---", req.file.path);
   
      contact.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
        email: req.body.email,
        social_link: req.body.social_link,
        image: (!req.file || null ) ? null: req.file.filename,
        user_id: uid
      }, uid, id, function (result) {
        console.log(result);
        if (result.affectedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    })
  })


  app.delete("/api/contact/:id", function (req, res) {
    console.log("!---------------------------!")
    console.log(req.user)
    var uid = req.user.id;
    var id = req.params.id;

    contact.delete(uid, id, function (result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

}

// old post method for only text input
// router.post("/contact", function(req, res) {
//   console.log("req:" + req);
//   console.log("req.body:" + req.body);
//   contact.create([
//     "first_name","last_name","phone_number","email","social_link"
//   ], [
//     req.body.first_name, req.body.last_name, req.body.phone_number, req.body.email, req.body.social_link
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

