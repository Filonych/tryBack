import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../ui/Error";

export const EditTodoItem = ({
  selectedItem,
  setSelectedItem,
  setTodoList,
}) => {
  const [error, setError] = useState(null);
  const fetchData = useFetch();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:3002/api/todos/edit";
      const method = "PUT";
      const response = await fetchData(url, method, selectedItem);

      if (response.error) {
        setError(response.error);
      } else {
        setError(null);
        setTodoList(response.todos);
        setSelectedItem({});
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        value={selectedItem.title || ""}
        onChange={(e) =>
          setSelectedItem((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      {error && <Error>{error}</Error>}
      <br />
      <br />
      <button type="submit">Редактировать</button>
    </form>
  );
};
