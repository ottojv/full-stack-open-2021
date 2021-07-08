import React from "react";

import Weather from "./Weather";

const Country = ({ country }) => (
  <div>
    <h2>{country.name}</h2>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>

    <h3>Languages</h3>
    <ul>
      {country.languages.map((language) => (
        <li key={language.name}>{language.name}</li>
      ))}
    </ul>

    <img src={country.flag} alt="flag of {country.name}" width="25%"></img>

    <Weather countryName={country.name} />
  </div>
);

export default Country;
