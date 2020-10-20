var express = require("express");

var router = express.Router();

var krabby_patty = require("../models/krabby_patty");

router.get("/", function(req, res) {
    krabby_patty.all(function(result) {
      res.render("index", {data: result});
    });
});

router.post("/", function(req,res) {
  const newPatty = req.body;
  krabby_patty.add(newPatty,function(result) {
    res.json({post: result.insertId});
  });
})

router.put("/:id", function(req,res) {
  const id = req.params.id;
  krabby_patty.put(true,id,function(result) {
    res.send(`Rows effected: ${result.changedRows}`);
  });
})

module.exports = router;