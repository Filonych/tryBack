async getTodos(req, res) {
    try {
        TodosModel.find({}, "title", (error, result) => {
            if (error) {
                res.status(400).json({ message: error })
            }
            
            res.status(200).json({ todos: result })
        })
        
    } catch (e) {
      res.status(400).json({ message: "Произошла ошибка при получении" });
    }
  }