import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'Mau',
        email: 'alemau97@gmail.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        
        const {name, value} = target;

        setFormState({
            ...formState,
            [name] : value
        })
    }
useEffect(() => {
    console.log('Something has been pressed but rendered only once')
}, [])

useEffect(() => {
    console.log('Email changed')
}, [email])

useEffect(() => {
    console.log('User changed')
}, [username])


    
  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input type='text' placeholder='Username' className='form-control' name='username' value={username} onChange={onInputChange}/>
        <input type='email' placeholder='alemau97@gmail.com' className='form-control mt-2' name='email' value={email} onChange={onInputChange}/>
    
        {
            username === 'Mau' && (<Message />)
        }
    </>
  )
}
