import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const countriesAndCities = {
  Israel: ['Jerusalem', 'Tel Aviv', 'Raanana', 'Ramat Gan'],
  Jordan: ['Amman', 'Zarqa', 'Irbid', 'Aqaba'],
  Syria: ['Damascus', 'Hama', 'Idlib', 'Raqqa'],
  Egypt: ['Cairo', 'Alexandria', 'Giza'],
};

const SelectCity = (props) => {
  const { cities, setCity, selectedCity } = props;
  return (
    <select
      onChange={(e) => setCity(e.target.value)}
      value={selectedCity}
      >
        <option disabled selected value>Please select a city</option>
      {cities.map((city, index) => (
        <option value={index}>{city}</option>
      ))}
    </select>
  );
};

const SelectCountry = (props) => {
  const { countries, setCountry, selectedCountry } = props;
  return (
    <select
      onChange={(e) => setCountry(e.target.value)}
      value={selectedCountry}
      >
        <option disabled selected value>Please select a country</option>
      {countries.map((country, index) => (
        <option value={index}>{country}</option>
      ))}
    </select>
  );
};

const SelectCountryAndCity = (props) => {
  const { countriesAndCities } = props;
  const [selectedCountry, setCountry] = useState(null);
  const [selectedCity, setCity] = useState(null);
  const countries = Object.keys(countriesAndCities);
  let cities = [];
  let countryName = '', cityName = '';

  if (selectedCountry) {
    countryName = countries[selectedCountry];
    cities = countriesAndCities[countryName];
  }

  if (selectedCity) {
    cityName = cities[selectedCity];
  }

  function setCountryAndResetCity(country) {
    setCountry(country);
    setCity(null);
  }

  return (
    <>
      { selectedCountry && selectedCity &&
        <p>You selected {countryName}/{cityName}</p>
      }

      <SelectCountry
        countries={countries}
        selectedCountry={selectedCountry}
        setCountry={setCountryAndResetCity}
      />

      {selectedCountry &&
        <SelectCity
          key={selectedCountry}
          cities={cities}
          selectedCity={selectedCity}
          setCity={setCity}
        />
      }
    </>
  );
};

const SelectColor = (props) => {
  const colors = ['red', 'blue', 'yellow', 'green'];
  return (
    <select>
      {colors.map((color, index) => (
        <option value={index}>{color}</option>
      ))}
    </select>
  );
};

const App = () => {

  return (
    <div>
      <h1>Hello World</h1>
      <SelectCountryAndCity countriesAndCities={countriesAndCities} />
      <SelectColor />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
