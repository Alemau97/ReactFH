import React, { act, useEffect, useReducer, useState } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { SearchingBar } from './SearchingBar';

const initialState = [{
    id: new Date().getTime(),
    description: 'Recolectar la piedra del Alma',
    done: false,
},{
    id: new Date().getTime() + 100,
    description: 'Recolectar la piedra de la Mente',
    done: false,
},]

const init = () => {
    return JSON.parse(localStorage.getItem('todos' || []))
}

export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const [newData, setNewData] = useState(todos);

    const [searchValue, setSearchValue] = useState();

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos])
    

        const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo, 
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: id,
        }

        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }

        dispatch(action);
    }

    const searchParams = (searchValue) => {

        const tokenization = searchValue.toLowerCase().split(' ');

        /* const token = tokenization.map(token => {
            return token
        });
 */
        //const mappedTokens = tokenization.map((token) => token);

        //console.log(mappedTokens)

        //console.log(tokenization);

        //const prub = todos.filter()

        //setSearchValue(searchValue);
       
        //const searchValues = todos.filter(todo => todo.description.toLowerCase().includes(token));  
        //const searchValues = todos.filter(todo => todo.description.toLowerCase().includes(token));  
         
        const searchValues = todos.filter(todo => tokenization.some(token => todo.description.toLowerCase().includes(token)));

        console.log(searchValues)
    
        if(searchValue.length > 0){
            
            setNewData(searchValues);
        }else{
            setNewData(todos);
        }
        return;
        
    }

    //console.log(todos.map((todo) => todo.description.split(' ')))

    useEffect(() => {
        setNewData(todos);
    }, [todos])

  return (
    <>
        <h1>TODOs: {todos.length} <small>pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
        <hr />

        <SearchingBar searchParams={searchParams}/>
        <div className='row'>
            <div className='col-7'>
                <TodoList todos={ newData } handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo}/>
            </div>
            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd handleNewTodo={handleNewTodo}/>
            </div>
        </div>
    </>
  )
}
