const express = require('express');
const router = express.Router();
const controller = require('../controller/CTodo');

// show all todos
router.get('/todos', controller.index);

// create a new todo
router.post('/todo', controller.createTodo);

// edit a specific todo
router.patch('/todo/:todoId', controller.editTodo);

// remove a specific todo
router.delete('/todo/:todoId', controller.removeTodo);

module.exports = router;
