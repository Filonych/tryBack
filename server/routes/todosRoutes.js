const { Router } = require("express");
const todosController = require("../controllers/todosController");

const todosRoutes = new Router()

todosRoutes.get('/list', todosController.getTodos)
todosRoutes.post('/add')
todosRoutes.delete('/delete')

module.exports = todosRoutes