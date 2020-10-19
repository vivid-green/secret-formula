var express = require("express");

var router = express.Router();

var krabby_patty = require("../models/krabby_patty");

router.get("/", function(req, res) {

    krabby_patty.all(function(result) {
      // console.log(result);
      res.render("index", {data: result});
    });
});

router.post("/", function(req,res) {
  const newPatty = req.body;
  console.log(newPatty);
  krabby_patty.add(newPatty,function(result) {

    res.json({ id: result.insertId });
  });
})

module.exports = router;