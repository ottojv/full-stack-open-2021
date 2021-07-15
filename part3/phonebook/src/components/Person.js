import React from "react";
import personServices from "../services/persons";

const Person = ({ person }) => (
  <div>
    <p>
      {person.name} {person.number}
    </p>
    <button
      type="button"
      onClick={personServices.deletePerson.bind(this, person)}
    >
      Delete Person
    </button>
  </div>
);

export default Person;
