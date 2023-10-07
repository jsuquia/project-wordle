import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);
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
