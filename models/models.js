const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    employesSchema = new Schema({
    	name: String,
    	last: String,
    	age: Number,
    	email: String,
    	phone: Number,
    });

module.exports = mongoose.model('employes', employesSchema);