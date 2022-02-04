
import './App.css';
import { useEffect, useState } from 'react';

import AnimalsList from './animals';
import BreedsList from './breedslist';
import CountriesList from './citiesList';
import FishList from './fishList';

import { getAnimals } from './getAnimals';
import { getBreeds } from './getBreeds';
import { getCountries } from './getCities';
import { getFish } from './getFish';


function App() {
 
  const [animals, setAnimals] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [countries, setCountries] = useState([]);
  const [fish, setFish] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [isAnimalsLoading, setAnimalsLoading] = useState(false);
  const [isBreedsLoading, setBreedsLoading] = useState(false);
  const [isCountriesLoading, setIsCountriesLoading] = useState(false);
  const [isFishLoading, setIsFishLoading] = useState(false);

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
    setBreedsLoading(true);

    const data = await getBreeds();
    setBreedsLoading(false);
    setBreeds(data);
  }

  async function fetchAndStoreCountries() {
    setIsCountriesLoading(true);

    const data = await getCountries();
    setIsCountriesLoading(false);
    setCountries(data);
  }

  async function fetchAndStoreFish() {
    setIsFishLoading(true);

    const data = await getFish();
    setIsFishLoading(false);
    setFish(data);
  }

  useEffect(() =>{
    fetchAndStoreAnimals();
    fetchAndStoreFish();
    fetchAndStoreCountries();
    
  }, []);

  return (
    
    <div className="App">
    
      <button onClick={fetchData}>Fetch Animals</button> 
      {
        isAnimalsLoading
          ? <h2>Animals Loading</h2>
          : <AnimalsList animals= {animals} />
      }
     
      <button onClick={fetchAndStoreBreeds}>Fetch Breeds</button> 
      {
        isBreedsLoading
          ? <h2>Breeds Loading</h2>
          : <BreedsList breeds= {breeds} />
      }
     
      <button onClick={fetchAndStoreCountries}>Fetch Countries</button> 
      {
        isCountriesLoading
          ? <h2>Countries Loading</h2>
          : <CountriesList countries= {countries} />
      }
     
      <button onClick={fetchAndStoreFish}>Fetch Fish</button> 
      {
        isFishLoading
          ? <h2>Fish Loading</h2>
          : <FishList fishes= {fish} />
      }
     
    </div>
  );
}

export default App;
