import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import guessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [finished, setFinished] = React.useState(false);
  const [won, setWon] = React.useState(false);

  const addGuess = (guess) => {
    // const nextGuesses = [...guesses];
    // nextGuesses.push(guess);
    // setGuesses(nextGuesses);
    setGuesses([...guesses, guess]);
  };

  const checkGuessedWord = (guess) => {
    const result = checkGuess(guess, answer);

    const hasWon = result
      ? result.every((val) => val.status === "correct")
      : false;

    if (hasWon) {
      setFinished(true);
      setWon(true);
    }

    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setFinished(true);
    }

    return result;
  };

  return (
    <>
      <GuessResults guesses={guesses} checkGuess={checkGuessedWord} />
      <GuessInput addGuess={addGuess} finished={finished} />
      {finished && (
        <Banner won={won} numOfGuesses={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
