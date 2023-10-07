import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    // const nextGuesses = [...guesses];
    // nextGuesses.push(guess);
    // setGuesses(nextGuesses);
    setGuesses([...guesses, guess]);
  };

  const check = (guess) => {
    return checkGuess(guess, answer);
  };

  return (
    <>
      <GuessResults guesses={guesses} checkGuess={check} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
