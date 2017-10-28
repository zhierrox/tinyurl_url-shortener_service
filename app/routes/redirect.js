var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService");
var path = require("path");
var statsService = require("../services/statsService")

// "*" regex express, can handle any content
router.get("*", function(req, res) {
	//originalUrl is "/shortUrl"; slice from index 1
	var shortUrl = req.originalUrl.slice(1);
	urlService.getLongUrl(shortUrl, function(urlPair) {
		if (urlPair) {
			res.redirect(urlPair.longUrl);
			statsService.logRequest(shortUrl, req);
		} else {
			res.sendFile("404.html", {root: path.join(__dirname, "../public/views/")});
		}
	});
});

module.exports = router;