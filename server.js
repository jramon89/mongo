const express = require('express');
const app = express();
const routes = require('./routes/routes');
const mongoose = require('mongoose');

app.listen(5000);


mongoose.connect('mongodb://localhost/demo');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Conection error'));
db.once('open', function(){
	console.log('Connected to Mongodb');
});


app.use('/operation', routes);

//console.log(cookies.name);