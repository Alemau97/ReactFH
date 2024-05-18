import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter } from 'react-router-dom';
//import { TodoApp } from './06-useReducer/TodoApp'
import { MainApp } from './07-useContext/MainApp'
//import './06-useReducer/intro-reducer';
//import { CallbackHook } from './05-useMemo/CallbackHook'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
)
