class TodosController {
    async getTodos (req, res) {
        try {
            res.status(400).json({message: 'Произошла ошибка при получении'})
        } catch (e) {
            res.status(400).json({message: 'Произошла ошибка при получении'})
        }
    }

    async addTodo (req, res) {
        try {

        } catch (e) {
            res.status(400).json({message: 'Произошла ошибка при добавлении'})
        }
    }

    async deleteTodo (req, res) {
        try {

        } catch (e) {
            res.status(400).json({message: 'Произошла ошибка при удалении'})
        }
    }
}

module.exports = new TodosController()