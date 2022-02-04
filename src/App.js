
import './App.css';
import { useEffect, useState } from 'react';

import AnimalsList from './animals';


import { getAnimals } from './getAnimals';






function App() {
 
  const [animals, setAnimals] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const [isAnimalsLoading, setAnimalsLoading] = useState(false);

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
  console.log(animals);
  useEffect(() =>{
    fetchAndStoreAnimals();
  }, []);

  return (
    
    <div className="App">
    
      <button onClick={fetchData}>Fetch Data</button> 
      <AnimalsList animals= {animals} />
    </div>
  
  
  );
}

export default App;
