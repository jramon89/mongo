const models = require('../models/models');
const employesArr = [
	{
		name: 'Jose Ramon',
		last: 'Roblero Ruiz',
		age: 29,
		email: 'jramon.roblero@gmail.com',
		phone: 5513363793,
	}
];

exports.all = function(req, res) {
	
	models.create(employesArr, function(err) {
		if (err) return res.send('Error traying to save in DB');
		
	});

	res.send('Initialized collection in dbs');
}

exports.find = function(req, res) {
	res.send('find method');
}

exports.add = function(req, res) {
	
	const newEmploye = new models({
		name: req.body.name,
		last: req.body.last,
		age: req.body.age,
		email: req.body.email,
		phone: req.body.phone,
	});

	models.save();
}

exports.remove = function(req, res) {
	res.send('remove method');
}

exports.update = function(req, res) {
	res.send('update method');
}