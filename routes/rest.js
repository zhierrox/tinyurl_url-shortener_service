var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlService = require("../services/urlService");

router.post("/urls", jsonParser, function(req, res) {
	var longUrl = req.body.longUrl;
	var shortUrl = urlService.getShortUrl(longUrl);
	res.json({
		longUrl: longUrl,
		shortUrl: shortUrl
	});
});
 
router.get("/urls/:shortUrl", function(req, res) {
	var shortUrl = req.params.shortUrl;
	var longUrl = urlService.getLongUrl(shortUrl);

	// console.log(shortUrl + "test");
	res.json({
		longUrl: longUrl,
		shortUrl: shortUrl
	});
});

module.exports = router;
















