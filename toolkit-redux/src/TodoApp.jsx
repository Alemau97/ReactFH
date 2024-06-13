import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    //const {data: todos = [], isLoading} = useGetTodosQuery();
    const {data: todo, isLoading} = useGetTodoByIdQuery(todoId);

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'true' : 'false' }</h4>

        <pre>{JSON.stringify(todo)}</pre>

        <button onClick={() => {
            if(todoId === 1){
                return;
            }else(
                setTodoId(todoId - 1)
            )
        }}>
            Prev Todo
        </button>
        <button onClick={() => setTodoId(todoId + 1)}>
            Next Todo
        </button>
        
        {/* <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'DONE' : 'Pending'}</strong>
                        {todo.title}
                    </li>
                ))
            }
        </ul> */}

    </> 
  )
}
