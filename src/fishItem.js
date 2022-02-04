import React from 'react';

export default function FishItem({ species, habitat, edible, size }){

  return <div className='fish-item'>
    <div>The {species} is a {size} sized fish. It lives in {habitat} and is {edible} good to eat!</div>
  </div>;
}