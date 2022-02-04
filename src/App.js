
import './App.css';
import { useEffect, useState } from 'react';

import AnimalsList from './animals';
import BreedsList from './breedslist';


import { getAnimals } from './getAnimals';
import { getBreeds } from './getBreeds';






function App() {
 
  const [animals, setAnimals] = useState([]);
  const [breeds, setBreeds] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const [isAnimalsLoading, setAnimalsLoading] = useState(false);
  const [isBreedsLoading, setBreedsLoading] = useState(false);

  async function fetchData(){
    setAnimalsLoading(true);

    const data = await getAnimals();
    setAnimalsLoading(false);
    setAnimals(data);
  }


  async function fetchAndStoreAnimals() {
   
    setAnimalsLoading(true);

    const data = await getAnimals();

    setLoading(false);
    setAnimals(data);
 
  }

  async function fetchAndStoreBreeds() {
    console.log(breeds);
    setBreedsLoading(true);

    const data = await getBreeds();

    setLoading(false);
    setBreeds(data);
 
  }

  useEffect(() =>{
    fetchAndStoreAnimals();
  }, []);

  return (
    
    <div className="App">
    
      <button onClick={fetchData}>Fetch Animals</button> 
      <AnimalsList animals= {animals} />
      <button onClick={fetchAndStoreBreeds}>Fetch Breeds</button> 
      <BreedsList breeds= {breeds} />
    </div>
  
  
  );
}

export default App;
