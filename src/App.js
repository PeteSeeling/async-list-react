
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
    console.log(breeds);
    setBreedsLoading(true);

    const data = await getBreeds();

    setLoading(false);
    setBreeds(data);
 
  }

  async function fetchAndStoreCountries() {
    console.log(countries);
    setIsCountriesLoading(true);

    const data = await getCountries();

    setLoading(false);
    setCountries(data);
 
  }


  async function fetchAndStoreFish() {
    console.log(fish);
    setIsFishLoading(true);

    const data = await getFish();

    setLoading(false);
    setFish(data);
 
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
      <button onClick={fetchAndStoreCountries}>Fetch Countries</button> 
      <CountriesList countries= {countries} />
      <button onClick={fetchAndStoreFish}>Fetch Fish</button> 
      <FishList fishes= {fish} />
    </div>
  
  
  );
}

export default App;
