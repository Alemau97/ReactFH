import React from 'react'

export const TodoItem = ({todo, handleDeleteTodo, handleToggleTodo}) => {

  return (
    <li className={`list-group-item d-flex justify-content-between ${todo.done && 'opacity-25 '}`}>
        <span className='align-self-center' onClick={() => handleToggleTodo(todo.id)}>{todo.description}</span>
        <button className='btn btn-danger' onClick={() => handleDeleteTodo(todo.id)}>Borrar</button>
    </li>
  )
}
