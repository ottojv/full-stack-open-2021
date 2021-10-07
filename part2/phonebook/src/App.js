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
  });

  const newPerson = () =>
    personService
      .createPerson({ name: newName, number: newNumber })
      .then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      });

  const updatePerson = (person) =>
    personService
      .updatePerson(person.id, { name: newName, number: newNumber })
      .then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      });

  const addPerson = (event) => {
    event.preventDefault();

    const foundPerson = searchPersonByName(newName);
    if (!foundPerson) {
      newPerson();
    } else if (
      window.confirm(
        `${foundPerson.name} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      updatePerson(foundPerson);
    }
  };

  const searchPersonByName = (name) => {
    return persons.find((person) => person.name === name);
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
