import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
       // document.querySelector('input').select()
      inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />
        <input type="text" placeholder="Ingrese su nombre" className="form-control" ref={inputRef}/>

        <button className="btn btn-primary" onClick={onClick}>Set focus</button>
    </>
  )
}
