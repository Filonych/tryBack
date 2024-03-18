import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../ui/Error";

export const EditTodoItem = ({
  selectedItem,
  setSelectedItem,
  setTodoList,
  selectedTitle,
}) => {
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);
  const fetchData = useFetch();

  const onHandleChange = (e) => {
    setSelectedItem((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (value === selectedTitle || value === null) {
      setError("Измените заголовок");
      return;
    }

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
        onChange={(e) => onHandleChange(e)}
      />
      {error && <Error>{error}</Error>}
      <br />
      <br />
      <button type="submit">Редактировать</button>
    </form>
  );
};
