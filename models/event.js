var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var eventSchema = new Schema({
	lat : String,
	lng : String,
	price: String,
	evento: String,
	company: String

});

module.exports = mongoose.model('event', eventSchema);