import React from 'react';

export default function AnimalItem({ animal, size, country, color }){

  return <div className='animal-item'>
    <div>The {animal} is {size} sized. Its country of origin is  {country} and its color is {color}</div>
  </div>;
}