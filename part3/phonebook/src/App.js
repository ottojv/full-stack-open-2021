import React, { useEffect, useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    personService.getPersons().then((response) => setPersons(response.data));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    isUnique(newName)
      ? personService
          .create({
            name: newName,
            number: newNumber,
          })
          .then((response) => {
            setPersons(persons.concat(response.data));
            setNewName("");
            setNewNumber("");
          })
      : window.alert(`${newName} is already added to phonebook`);
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
