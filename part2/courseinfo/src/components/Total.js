import React from "react";

const Total = ({ parts }) => (
  <p>
    <b>Total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</b>
  </p>
);

export default Total;
