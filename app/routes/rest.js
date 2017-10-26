var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlService = require("../services/urlService");

router.post("/urls", jsonParser, function(req, res) {
	var longUrl = req.body.longUrl;
	var shortUrl = urlService.getShortUrl(longUrl, function(urlPair) {
		res.json(urlPair);
	});
});
 
router.get("/urls/:shortUrl", function(req, res) {
	var shortUrl = req.params.shortUrl;
	urlService.getLongUrl(shortUrl, function(urlPair) {
		if (urlPair) {
			res.json(urlPair);
		} else {
			res.status(404).send("Not Exist!");
		}
	});
});

module.exports = router;
















