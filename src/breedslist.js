import React from 'react';
import BreedsItem from './breedsItem';

export default function BreedsList({ breeds }) {

  return <div className={'breeds-list'}>
      Dog Breeds List Here:
    <div>{breeds.map((breed) => <BreedsItem key ={breed} Name={breed.Name} Size={breed.Size} LifeSpan={breed.LifeSpan} Color={breed.Color} />)}
    </div>
  </div>;
}