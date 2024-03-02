import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const AddTodoItem = ({ updateTodoList }) => {
  const [title, setTitle] = useState("");

  const { fetchData, error } = useFetch();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:3002/api/todos/add";
      const method = "POST";
      const body = { title };
      await fetchData(url, method, body);

      if (error) {
        alert(error);
      } else {
        updateTodoList();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle((prev) => e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Добавить</button>
    </form>
  );
};
