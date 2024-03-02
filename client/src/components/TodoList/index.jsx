import { useFetch } from "../../hooks/useFetch";

export const TodoList = ({ todoList, updateTodoList, setSelectedItem }) => {
  const { fetchData, error } = useFetch();

  const deleteTodo = async (title) => {
    try {
      const url = "http://localhost:3002/api/todos/delete";
      const method = "DELETE";
      const body = { title };
      await fetchData(url, method, body);

      updateTodoList();

      if (error) {
        alert(error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {!todoList.length && <>Loading...</>}
      {todoList.map((todo) => (
        <div key={todo._id}>
          {todo.title} &nbsp;
          <span
            style={{ marginRight: "15px", cursor: "pointer" }}
            onClick={() => deleteTodo(todo.title)}
          >
            Удалить
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedItem(todo)}
          >
            Редактировать
          </span>
        </div>
      ))}
    </>
  );
};
