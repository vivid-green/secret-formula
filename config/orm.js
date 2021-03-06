var connection = require("./connection");

var orm = {
    all: function(table,cb) {
      var queryString = "SELECT * FROM ??;";
      connection.query(queryString, [table], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    add: function(table, data, cb) {
      var queryString = "INSERT INTO ?? SET ?;";
      connection.query(queryString, [table,data], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    put: function(table, value, id, cb) {
      var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?;";
      connection.query(queryString, [table, value, id], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
}

module.exports = orm;