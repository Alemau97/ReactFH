import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const getHeroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                getHeroes.map((hero, key) => (
                    <HeroCard key={key} {...hero}/>
                ))
            }
        </div>
    </>
  )
}
