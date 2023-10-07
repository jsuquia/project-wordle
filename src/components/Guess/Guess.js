import React from "react";
import { range } from "../../utils";

function Guess({ guess, checkGuess }) {
  const checkedGuess = checkGuess(guess);
  console.log(checkedGuess);

  return (
    <p className="guess">
      {range(5).map((num) => {
        if (!checkedGuess) return <span key={num} className="cell"></span>;

        const className = `cell ${checkedGuess[num].status}`;
        return (
          <span key={num} className={className}>
            {checkedGuess[num].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
