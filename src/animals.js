import react from 'react';

export default function AnimalsList({ animals }) {
  return animals.map((animal, i) => <div key={animal + i}>
    <div>{animal.name}</div>
    <ul>
      {animal.size.map((animal, i) => <li key={animal.size + i}>{animal.size}</li>)}
    </ul>
    <p>{animal.color}</p>
    <p>{animal.country}</p>
  </div>);
}