import React, { useEffect, useState } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => setCountries(response.data));
  }, []);

  const [keyword, setKeyword] = useState("");
  const handleKeyword = (event) => {
    event.preventDefault();
    setKeyword(event.target.value);
  };

  const handleButton = (countryName, event) => {
    event.preventDefault();
    setKeyword(countryName);
  };

  return (
    <div>
      <Filter keyword={keyword} handleKeyword={handleKeyword} />
      <Countries countries={countries} keyword={keyword} handleButton={handleButton} />
    </div>
  );
};

export default App;
