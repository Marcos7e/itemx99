var mongoose = require('mongoose');
var user = mongoose.model('user');

exports.findAllUsers = function(req, res){
	user.find(function(err, user){
	if(err) res.send(500, err.message);

		console.log('GET /user');
			res.status(200).jsonp(user);
	});
};

