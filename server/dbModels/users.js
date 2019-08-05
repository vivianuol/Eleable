var orm = require ("../config/orm.js");

var users = {
   all: function(uid, cb) {
     orm.all("users", uid, function(res) {
       cb(res);
     });
   },
   one: function(id, cb) {
     orm.getOne("users", id, function(res) {
       cb(res);
     })
     
   },
   // The variables cols and vals are object.
   create: function(cols, vals, cb) {
     orm.insert("users", cols, vals, function(res) {
       cb(res);
     })
   },

   update: function(objColVals, id, cb) {
     orm.update("users", objColVals, id, function(res) {
       cb(res);
     });
   },
   delete: function(condition, cb) {
     orm.delete("users", condition, function(res) {
       cb(res);
     });
   }
 };
 
 // Export the database functions for the controller (catsController.js).
 module.exports = users;