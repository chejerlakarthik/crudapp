const express = require("express");
const todoController = require("./controllers/todo-controller");
const router = express.Router();

router.get('/todo', todoController.getTodos);
router.post('/todo', todoController.saveTodo);

module.exports = router;