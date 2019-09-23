var express = require("express");
var router = express.Router();
var models = require('../models/burger.js');
//Homepage ROute 
router.get("/", function(req, res) {
 models.all(function(data) {
   var hbsObject = {
     burgers: data
   };
   console.log(hbsObject);
   res.render("index", hbsObject);
 })}); 

 router.post("/api/burgers", function(req, res) {
  models.create(
  req.body.burgername
  , function(result) {
    // Send back the ID of the new quote
   res.json({ id: result.insertId });

    res.redirect("/")
  });
});
//PUT route 
router.put("/api/burgers/:id", function(req, res) {
 var condition = "id = " + req.params.id;

 console.log("condition", condition);

 models.update(req.params.id, function(result) {
   if (result.changedRows == 0) {
     // If no rows were changed, then the ID must not exist, so 404
     return res.status(404).end();
   } else {
     res.status(200).end();
   }
 });
});





