import axios from "axios";
import React, { useEffect, useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => setPersons(response.data));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    isUnique(newName)
      ? setPersons(persons.concat({ name: newName, number: newNumber }))
      : window.alert(`${newName} is already added to phonebook`);
    setNewName("");
    setNewNumber("");
  };

  const isUnique = (name) => {
    return persons.find((person) => person.name === name) === undefined;
  };

  const handleName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const handleKeyword = (event) => {
    event.preventDefault();
    setKeyword(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter keyword={keyword} handleKeyword={handleKeyword} />
      <PersonForm
        name={newName}
        handleName={handleName}
        number={newNumber}
        handleNumber={handleNumber}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} keyword={keyword} />
    </div>
  );
};

export default App;
