export const TodoList = ({ todoList }) => {

    return (
        <>
            {
                !todoList.length && <>Loading...</>
            }
            {
                todoList.map((todo) => <div key={todo._id}>{todo.title}
                <div>Удалить</div></div>
                )
            }
        </>
    )}