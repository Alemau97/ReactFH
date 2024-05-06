import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHooks = () => {
   
    const {increase, decrease, counter} = useCounter(1);

    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    


  return (
    <>
        <h1>Informacion de Pokemon</h1>
        <hr />
        {isLoading ? (<h1>Cargando...</h1>) : (<PokemonCard name={data.name} id={data.id} sprites={[data.sprites.front_default, data.sprites.front_shiny, data.sprites.back_default, data.sprites.back_shiny]} />)}

        <hr />
        <button className="btn btn-danger" onClick={() => counter > 1 ?decrease(1) : null}>Prev Pokemon</button>
        <button className="btn btn-primary" onClick={() => increase(1)}>Next Pokemon</button>
    </>
  )
}
