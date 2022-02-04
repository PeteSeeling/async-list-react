import React from 'react';

export default function CountriesItem({ country, language, population, visited }){

  return <div className='countries-item'>
    <div>The country of {country} has a population of {population}. The primary language is {language} I {visited} visited here.</div>
  </div>;
}