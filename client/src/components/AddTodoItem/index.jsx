import { useState } from "react"

export const AddTodoItem = ({ updateTodoList }) => {
    const [title, setTitle] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch('http://localhost:3002/api/todos/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title})
            })
            
            if (res.status !== 200) {
                const json = res.json()
                alert(json.message)
                return
            }
            updateTodoList()
        
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <br />
            <button type="submit">Добавить</button>
        </form>
    )}