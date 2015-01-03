
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var historialSchema = new Schema({
	evntName : String,
	evntCompany:  String,
	evntPrice: String,
 	userName:  String,
	userId:  String,
	buyDate: Date,
	isPending: Boolean
});

module.exports = mongoose.model('Historial', historialSchema, 'historial');