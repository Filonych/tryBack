const TodosModel = require("../models/TodosModel");

class TodosController {
  async getTodos(req, res) {
    try {
        
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при получении" });
    }
  }

  async addTodo(req, res) {
    try {
        if(!req.body.title) {
            res.status(400).json({ message: "Пожалуйста, добавьте заголовок" }) 
        }

        const TodoModel = new TodosModel({title: req.body.title})

        await TodoModel.save()
        res.status(200).json({ message: "Элемент успешно добавлен" });
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при добавлении" });
    }
  }

  async deleteTodo(req, res) {
    try {
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при удалении" });
    }
  }
}

module.exports = new TodosController();
