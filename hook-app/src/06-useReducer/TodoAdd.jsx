import React, { useState } from 'react'

export const TodoAdd = ({handleNewTodo}) => {

    const [newTodo, setNewTodo] = useState({
        id: new Date().getTime() + 320,
        description: '',
        done: false,
    },);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTodo.description.length <= 1 ) return;
        handleNewTodo({
            ...newTodo
        });
        setNewTodo({
            id: new Date().getTime() + 320,
            description: '',
            done: false,
        });
        
    }

    const handleValue = ({target}) =>{
        setNewTodo({
            ...newTodo,
            description: target.value
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input  type='text' placeholder='Que hay que hacer?' className='form-control' value={newTodo.description} onChange={handleValue}/>
        <button type='submit' className='btn btn-outline-primary mt-1' >Agregar</button>
    </form>
  )
}
