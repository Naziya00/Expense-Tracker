const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://khannaziya7921:naziyakhan@cluster0.v2iesux.mongodb.net/MyMoney')
const connection = mongoose.connection
connection.on('error', err => console.log(err))

connection.on('connected', () => console.log('Mongo DB connetion succesfull'))