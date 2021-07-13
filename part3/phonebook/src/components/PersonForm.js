import React from "react";

const PersonForm = ({ name, handleName, number, handleNumber, addPerson }) => (
  <div>
    <h3>New contact</h3>
    <form>
      <div>
        Name: <input value={name} onChange={handleName} />
      </div>
      <div>
        Number: <input value={number} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>
          Add
        </button>
      </div>
    </form>
  </div>
);

export default PersonForm;
