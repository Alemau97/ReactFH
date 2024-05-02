import { useForm } from "../hooks/useForm"

export const FormularioConCustomHook = () => {

    const {onInputChange,onResetForm,formState,username,email,password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    

  return (
    <>
        <h1>Formulario Compuesto</h1>
        <hr />
        <input type='text' placeholder='Username' className='form-control' name='username' value={username} onChange={onInputChange}/>
        <input type='email' placeholder='alemau97@gmail.com' className='form-control mt-2' name='email' value={email} onChange={onInputChange}/>
        <input type='password' placeholder='Password' className='form-control mt-2' name='password' value={password} onChange={onInputChange}/>
    
        <hr />

        <button className="btn btn-primary" onClick={onResetForm}>Reset</button>

        <p>Values: {JSON.stringify(formState)}</p>

      {/*   {
            username === 'Mau' && (<Message />)
        } */}
    </>
  )
}
