const TodosModel = require("../models/TodosModel");

class TodosController {
  async getTodos(req, res) {
    try {
      const result = await TodosModel.find({}, "title");
      res.status(200).json({ todos: result });
    } catch (error) {
      res.status(400).json({ message: "Произошла ошибка при получении" });
    }
  }

  async addTodo(req, res) {
    try {
      if (!req.body.title) {
        res.status(400).json({ message: "Пожалуйста, добавьте заголовок" });
      }

      const TodoModel = new TodosModel({ title: req.body.title });

      await TodoModel.save();
      res.status(200).json({ message: "Элемент успешно добавлен" });
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при добавлении" });
    }
  }

  async deleteTodo(req, res) {
    try {
      if (!req.body.title) {
        res.status(400).json({ message: "Пожалуйста, укажите заголовок" });
        return;
      }

      const { deletedCount } = await TodosModel.deleteOne({
        title: req.body.title,
      });

      if (deletedCount === 0) {
        res
          .status(400)
          .json({
            message: "Удаление не произошло, пожалуйста, проверьте заголовок",
          });
        return;
      }
      res.status(200).json({ message: "Элемент успешно удален" });
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при удалении" });
    }
  }

  async editTodo(req, res) {
    try {
      const updatedTodo = await TodosModel.findByIdAndUpdate(
        req.body._id,
        { title: req.body.title },
        { new: true }
      );

      if (!updatedTodo) {
        return res
          .status(400)
          .json({ message: "Произошла ошибка при редактировании" });
      }

      res
        .status(200)
        .json({ todo: updatedTodo, message: "Элемент успешно отредактирован" });
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при редактировании" });
    }
  }
}

module.exports = new TodosController();
