import React from 'react';
import BreedsItem from './breedsItem';

export default function BreedsList({ breeds }) {

  return <div className={['breeds-list']}>
      Dog Breeds List Here:
    <div>{breeds.map((breed, i) => <BreedsItem key ={breed, i} animal={breed.name} size={breed.size} country={breed.lifespan} color={breed.color} />)}
    </div>
  </div>;
}