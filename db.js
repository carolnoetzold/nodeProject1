var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node1');

var userSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    cidade: String,
    telefone: String
}, { collection: 'usercollection' }
);
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema }