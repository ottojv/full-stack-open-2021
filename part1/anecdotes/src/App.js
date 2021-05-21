import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [anecdotesRatings, setRatings] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0)
  );
  const [highestRating, setHighestRating] = useState(0);

  const updateRating = () => {
    setRatings([
      ...anecdotesRatings.slice(0, selected),
      anecdotesRatings[selected] + 1,
      ...anecdotesRatings.slice(selected + 1, anecdotesRatings.length),
    ]);
    if (anecdotesRatings[selected] >= anecdotesRatings[highestRating]) {
      setHighestRating(selected);
    }
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {anecdotesRatings[selected]} votes</p>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anectode</button>
      <button onClick={updateRating}>vote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[highestRating]}</p>
      <p>has {anecdotesRatings[highestRating]} votes</p>
    </div>
  );
};

export default App;
