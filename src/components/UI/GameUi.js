import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, preference, setScore }) => {
  console.log('this is my choice ->',preference);
  const [computer, setcomputer] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setCounter] = useState(3);

  const newcomputerPick = () => {
    const choices = ["rock", "paper", "scissors"];
    setcomputer(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    console.log('computer choice is - ',computer);
    newcomputerPick();
  }, [computer]);

  const Result = () => {
    if (preference === "rock" && computer === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (preference === "rock" && computer === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (preference === "scissors" && computer === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (preference === "scissors" && computer === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (preference === "paper" && computer === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (preference === "paper" && computer === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (preference === "paper" && computer === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, computer]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${preference} ${
            playerWin === "win" ? `icon icon--${preference}--winner` : ""
          }`}
        ></div>
      </div>
      {playerWin === "win" && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/" className="play-again" onClick={() => setcomputer()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setcomputer()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/" className="play-again" onClick={() => setcomputer()}>
            Play Again
          </Link>
        </div>
      )}

      <div className="game__computer">
        <span className="text">The computer Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${computer} ${
              playerWin === "lose" ? `icon icon--${computer}--winner` : ""
            }`}
          >{computer}</div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;

/*
 my choice:{preference} <br />
      computer choice:{computer} <br />
      Result:
      {playerWin == "win" && <h2>You Win</h2>}
      {playerWin == "lose" && <h2>You lose</h2>}
      {playerWin == "draw" && <h2>Draw</h2>}
      <Link to="/" onClick={() => setcomputer()}>
        Play Again
      </Link>

*/
