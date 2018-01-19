const mongoose = require("mongoose");

var Schema = { 
    name: String 
};

const Todo = mongoose.model('todo', Schema);

module.exports = Todo;