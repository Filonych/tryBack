import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../ui/Error";

export const AddTodoItem = ({ updateTodoList }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const fetchData = useFetch();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:3002/api/todos/add";
      const method = "POST";
      const body = { title };
      const response = await fetchData(url, method, body);

      if (response.error) {
        setError(response.error);
      } else {
        setError(null);
        updateTodoList();
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle((prev) => e.target.value)}
      />
      {error && <Error>{error}</Error>}
      <br />
      <br />
      <button type="submit">Добавить</button>
    </form>
  );
};
