import React from "react";

const Filter = ({ keyword, handleKeyword }) => (
  <div>
    <h3>Search for contact</h3>
    Keyword: <input value={keyword} onChange={handleKeyword} />
  </div>
);

export default Filter;
