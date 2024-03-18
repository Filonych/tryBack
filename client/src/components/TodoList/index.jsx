import { useFetch } from "../../hooks/useFetch";
import { Button } from "../ui/Button";

export const TodoList = ({
  todoList,
  updateTodoList,
  setSelectedItem,
  setSelectedTitle,
}) => {
  const fetchData = useFetch();

  const deleteTodo = async (title) => {
    try {
      const url = "http://localhost:3002/api/todos/delete";
      const method = "DELETE";
      const body = { title };
      await fetchData(url, method, body);

      updateTodoList();
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClick = (todo) => {
    setSelectedItem(todo);
    setSelectedTitle(todo.title);
  };

  return (
    <>
      {!todoList.length && <>Loading...</>}
      {todoList.map((todo) => (
        <div key={todo._id}>
          {todo.title} &nbsp;
          <Button onClick={() => deleteTodo(todo.title)}>Удалить</Button>
          <Button onClick={() => onClick(todo)}>Редактировать</Button>
        </div>
      ))}
    </>
  );
};
