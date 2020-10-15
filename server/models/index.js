const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://dbkunal:dbkunal@cluster0.ezqem.mongodb.net/farmer?retryWrites=true&w=majority',{useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: true});

module.exports.User = require('./user');
