export const EditTodoItem = ({
  selectedItem,
  setSelectedItem,
  updateTodoList,
}) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3002/api/todos/edit", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedItem),
      });

      if (res.status !== 200) {
        const json = res.json();
        alert(json.message);
        return;
      }
      updateTodoList();
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
