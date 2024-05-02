import { useState } from "react";

export const useCounter = (counterValue) => {

    const [counter, setCounter] = useState(counterValue);

    const increaseCounter = (value) => {
        console.log(value)
        setCounter(counter + value);
    }

    const decreaseCounter = (value) => {
        if(counter === 0) return;   
        setCounter(counter - value);
    }

    const resetCounter = () => {
        setCounter(counterValue);
    }

    return{
        counter: counter,
        increase: increaseCounter,
        decrease: decreaseCounter,
        reset: resetCounter,
    }

}