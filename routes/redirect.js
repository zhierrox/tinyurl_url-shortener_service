var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService");

//"*" regex express, can handle any content
router.get("*", function(req, res) {
	//originalUrl is "/shortUrl"; slice from index 1
	var shortUrl = req.originalUrl.slice(1);
	var longUrl = urlService.getLongUrl(shortUrl);
	res.redirect(longUrl);
});

module.exports = router;