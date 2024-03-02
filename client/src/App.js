import "./App.css";
import { useCallback, useEffect, useState } from "react"
import { useGetTodoList } from "./hooks/useGetTodoList";
import { TodoList } from "./components/TodoList";
import { AddTodoItem } from "./components/AddTodoItem";
import { EditTodoItem } from "./components/EditTodoItem";

function App() {
  
  const [todoList, setTodoList] = useState([])
  const [title, setTitle] = useState('')
  const [selectedItem, setSelectedItem] = useState({})

  const getTodoList = useGetTodoList()

  const updateTodoList = useCallback(() => {
    getTodoList().then((result) => setTodoList(result.todos))
  }, [getTodoList])

  useEffect(() => {
    updateTodoList()
  }, [updateTodoList])

  return <div className="App">
    <h1>Мои задачи</h1>
    <TodoList todoList={todoList} updateTodoList={updateTodoList} setTitle={setTitle} setSelectedItem={setSelectedItem}/>
    <br />
    <AddTodoItem updateTodoList={updateTodoList} />
    <br />
    <h1>Редактировать задачу</h1>
    <EditTodoItem title={title} setTitle={setTitle} selectedItem={selectedItem} setSelectedItem={setSelectedItem} updateTodoList={updateTodoList}/>
  </div>;
}

export default App;
