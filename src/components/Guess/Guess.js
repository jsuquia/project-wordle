import React from "react";

function Guess({ guess }) {
  return (
    <p className="guess">
      {[...guess].map((letter) => (
        <span className="cell">{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
