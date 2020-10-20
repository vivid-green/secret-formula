var orm = require("../config/orm");

var crabby_patty = {
  all: function(cb) {
        orm.all("krabby_patty", function(result) {
          cb(result);
        });
  },
  add: function(data,cb) {
    orm.add("krabby_patty",data, function(res) {
      cb(res);
    });
  },
  put: function(value, id, cb) {
    orm.put("krabby_patty", value, id, function(res){
      cb(res);
    })
  }
}

module.exports = crabby_patty;