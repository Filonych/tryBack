import { useFetch } from "../../hooks/useFetch";

export const EditTodoItem = ({
  selectedItem,
  setSelectedItem,
  updateTodoList,
}) => {
  const { fetchData, error } = useFetch();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:3002/api/todos/edit";
      const method = "PUT";
      await fetchData(url, method, selectedItem);

      if (error) {
        alert(error);
      } else {
        updateTodoList();
        setSelectedItem({});
      }
    } catch (e) {
      console.log(e);
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
      <br />
      <br />
      <button type="submit">Редактировать</button>
    </form>
  );
};
