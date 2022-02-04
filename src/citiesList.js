import React from 'react';
import CountriesItem from './citiesItem';

export default function CountriesList({ countries }) {
  console.log(countries);
  return <div className={'countries-list'}>
      Countries List Here:
    <div>{countries.map((country, i) => <CountriesItem key ={country, i} country={country.country} population={country.population} visited={country.visited} language={country.language} />)}
    </div>
  </div>;
}