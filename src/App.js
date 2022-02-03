
import './App.css';
import { useState } from 'react';

import AnimalsList from './animals';
import { getAnimals } from './getAnimals';




function App() {
  const [animals, setAnimals] = useState([]);

  const [isLoading, setLoading] = useState(false);


  async function fetchData() {
    setLoading(true);
    const data = await getAnimals();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchData}>Fetch Data</button>
        <h3>Animals List</h3>
        <AnimalsList animals={animals} />
    
      </header>
    </div>
  );
}

export default App;
