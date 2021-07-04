import React from "react";

const Filter = ({ keyword, handleKeyword }) => (
  <div>
    <p>
      Find countries:
      <input value={keyword} onChange={handleKeyword} />
    </p>
  </div>
);

export default Filter;
