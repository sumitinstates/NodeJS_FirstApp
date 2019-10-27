var express = require('express');

var router = express.Router();

router.get("/",function(req,res){
	console.log("Inside route file");
	res.render("index");
});

module.exports = router;