import React from 'react';
import AnimalItem from './animalItem';

export default function AnimalsList({ animals }) {
  console.log(animals.size);
  return <div className={['animals-list']}>
      Animals List Here:
    <div>{animals.map((animal, i) => <AnimalItem key ={animal, i} animal={animal.name} size={animal.size} country={animal.country} color={animal.color} />)}
    </div>
  </div>;
}