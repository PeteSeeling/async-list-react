import React from 'react';
import FishItem from './fishItem';

export default function FishList({ fishes }) {
 
  return <div className={'fish-list'}>
      FishList Here:
    <div>{fishes.map((fish, i) => <FishItem key ={fish, i} species={fish.species} size={fish.size} habitat={fish.habitat} edible={fish.edible} />)}
    </div>
  </div>;
}