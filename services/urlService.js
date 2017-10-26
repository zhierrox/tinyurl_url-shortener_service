var UrlModel = require("../models/urlModel")

var encode = [];
var genCharArray = function (charA, charZ) {
	var arr = [];
	var i = charA.charCodeAt(0);
	var j = charZ.charCodeAt(0);

	for (; i <= j; i++) {
		//unicode to string
		arr.push(String.fromCharCode(i)); 
	}
	return arr;
};

encode = encode.concat(genCharArray("A", "Z"));
encode = encode.concat(genCharArray("a", "z"));
encode = encode.concat(genCharArray("0", "9"));

var getShortUrl = function (longUrl, callback) {
	if (longUrl.indexOf("http") === -1) {
		longUrl = "http://" + longUrl;
	}

	//findOne only return one column
	UrlModel.findOne({longUrl: longUrl}, function(err, data) {
		if (data) {
			callback(data);
		} else {
			generateShortUrl(function (shortUrl) {
				var url = new UrlModel({
					shortUrl: shortUrl,
					longUrl: longUrl
				});
				url.save();
				callback(url);
			});

		}
	});
};

var generateShortUrl = function(callback) {
	//Object.keys to get hash map size
	UrlModel.count({}, function(err, data) {
		callback(convertTo62(data));
	});
};	

var convertTo62 = function (num) {
	var result = "";
	//includes num == 0
	do {
		result = encode[num % 62] + result;
		//floor is left integer for both positive and negative number
		num = Math.floor(num / 62);
	} while (num);

	return result;
};

var getLongUrl = function(shortUrl, callback) {
	// return urlPair {shortUrl, longUrl};
	UrlModel.findOne({shortUrl: shortUrl}, function(err, data) {
		callback(data);
	});
};
 
module.exports = {
	getShortUrl: getShortUrl,
	getLongUrl: getLongUrl
};




















