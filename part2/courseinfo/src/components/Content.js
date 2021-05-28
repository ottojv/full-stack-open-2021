import React from "react";
import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
    <Total key={parts.length + 1} parts={parts} />
  </div>
);

export default Content;
