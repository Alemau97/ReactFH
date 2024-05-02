import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormularioConCustomHook } from './02-useEffect/FormularioConCustomHook'


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
   <FormularioConCustomHook />
 // </React.StrictMode>,
)
