import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {increase, decrease, reset, counter} = useCounter(5);

  return (
    <>
        <h1>Counter With Hook: {counter}</h1>
        <hr />
        <button className='btn btn-primary' onClick={() => increase(1)}>+1</button>
        <button className='btn btn-primary' onClick={reset}>Reset</button>
        <button className='btn btn-primary' onClick={()=>decrease(1)}>-1</button>
    </>
  )
}
