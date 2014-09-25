
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	uname: 	String,
	birth:  String,
	email:  String,
	uName:  String,
	passwd: String
});

module.exports = mongoose.model('User', userSchema, 'user');