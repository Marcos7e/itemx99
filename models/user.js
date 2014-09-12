'use strict';
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	name: 	String,
	birth:  Date,
	email:  String,
	uName:  String,
	passwd: String
});

module.exports = mongoose.model('user', userSchema);