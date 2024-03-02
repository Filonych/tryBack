export const TodoList = ({ todoList, updateTodoList, setSelectedItem }) => {
  const deleteTodo = async (title) => {
    try {
      const res = await fetch("http://localhost:3002/api/todos/delete", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
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
    <>
      {!todoList.length && <>Loading...</>}
      {todoList.map((todo) => (
        <div key={todo._id}>
          {todo.title} &nbsp;
          <span style={{marginRight: '15px', cursor: 'pointer'}} onClick={() => deleteTodo(todo.title)}>Удалить</span>
          <span style={{cursor: 'pointer'}} onClick={() => setSelectedItem(todo)}>Редактировать</span>
        </div>
      ))}
    </>
  );
};
