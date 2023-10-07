import React from "react";

function Guess({ guess }) {
  const cellArr = guess ? [...guess] : new Array(5).fill("");

  return (
    <p className="guess">
      {cellArr.map((letter, idx) => {
        return (
          <span key={idx} className="cell">
            {letter ?? ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
