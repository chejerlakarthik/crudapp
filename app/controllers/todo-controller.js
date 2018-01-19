var Todo = require("../models/todo");

function saveTodo(req, res){
    const todo = new Todo({ name: req.body.name});
    todo.save().then(() => res.send('Success'));
}

function getTodos(req, res){
    var query = Todo.find();
    query.exec(function(err, records){
      if(err) return res.status(500).send(err);
        res.send({
           success : true,
           records : records
        });
    });
}

module.exports = {
    saveTodo : saveTodo,
    getTodos : getTodos
};