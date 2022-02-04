import React from 'react';

export default function BreedsItem({ Name, Size, Color, LifeSpan }){

  return <div className='breeds-item'>
    <div>The {Name} is {Size} sized. It lives about {LifeSpan} years and its color is {Color}</div>
  </div>;
}