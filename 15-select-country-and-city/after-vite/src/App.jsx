import React from 'react';
import SelectColor from './SelectColor';
import SelectCountryAndCity from './SelectCountryAndCity';

const countriesAndCities = {
  Israel: ['Jerusalem', 'Tel Aviv', 'Raanana', 'Ramat Gan'],
  Jordan: ['Amman', 'Zarqa', 'Irbid', 'Aqaba'],
  Syria: ['Damascus', 'Hama', 'Idlib', 'Raqqa'],
  Egypt: ['Cairo', 'Alexandria', 'Giza'],
};


const App = () => {

  return (
    <div>
      <h2>Color Picker Demo</h2>
      <SelectColor />
      <hr />

      <h2>Country and City Select Demo</h2>
      <SelectCountryAndCity countriesAndCities={countriesAndCities} />
    </div>
  )
};


export default App
