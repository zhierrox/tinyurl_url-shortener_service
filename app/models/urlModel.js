var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//it's creation time, not access time
var UrlSchema = new Schema({
	shortUrl: String,
	longUrl: String,
	username: String,
	creationTime: Date
});

var urlModel = mongoose.model("UrlModel", UrlSchema);

module.exports = urlModel;