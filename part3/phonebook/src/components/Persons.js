import React from "react";
import Person from "./Person";

const Persons = ({ persons, keyword }) => (
  <div>
    {persons
      .filter((person) =>
        person.name.toLowerCase().includes(keyword.toLowerCase())
      )
      .map((person) => (
        <Person key={person.name} person={person} />
      ))}
  </div>
);

export default Persons;
