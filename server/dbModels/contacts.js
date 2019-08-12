 var orm = require ("../config/orm.js");

 var contacts = {
    all: function(uid, cb) {
      orm.all("contacts", uid, function(res) {
        cb(res);
      });
    },
    one: function(uid, id, cb) {
      orm.getOne("contacts", uid, id, function(res) {
        cb(res);
      })
    },
    // The variables cols and vals are object.
    create: function(cols, vals, cb) {
      orm.insert("contacts", cols, vals, function(res) {
        cb(res);
      })
    },

    update: function(objColVals, id, cb) {
      orm.update("contacts", objColVals, id, function(res) {
        cb(res);
      });
    },
    delete: function(uid, id, cb) {
      orm.delete("contacts", uid, id, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = contacts;