// Requiring necessary npm middleware packages 
const express= require("express");

const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");


//set up the port
var PORT = process.env.PORT || 8080;

var app = express();
var cors = require('cors');
// Then pass them to cors:
//app.use(cors());

//set up multiple corsOptions.
var allowedOrigins = ['http://localhost:3000',
                      'http://192.168.0.11:3000'];
app.use("*", cors( function(req, callback){
  if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions)
  }
));

// // Set up a whitelist and check against it:
// var corsOptions = { 
//   origin: 'http://localhost:3000',
//   credentials: true
// }
// app.use('*', cors(corsOptions));

//app.options("http://localhost:3000", cors())

//configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//use sessoins to keep track of user's login status
app.use(session({secret: "keyboard cat", resave:true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

//requiring routes for auth
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./controllers/contacts_controller")(app);
//require("./controllers/users_controller")(app);

// Import routes and give the server access to them.
// var routes = require("./controllers/contacts_controller");

// app.use('/api/noauth', routes);

//Without Authentication
// Start our server so that it can begin listening to client requests.
// app.listen(8080, function() {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: PORT" + PORT);
//   });

//With Authentication
// Syncing our database and logging a message to the user upon success

  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
