import React from "react";

import Country from "./Country";

const Countries = ({ countries, keyword }) => {
  console.log(countries);
  let filteredCountries = countries.filter((country) =>
    country.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  );

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />;
  }

  return filteredCountries.map((country) => <p>{country.name}</p>);
};

export default Countries;
