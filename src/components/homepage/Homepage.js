import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ setPreference }) => {
  const setChoice = (e) => {
    setPreference(e.target.dataset.id);
  };

  return (
    <div className="play">
        <Link to="/game">
          <div
            data-id="paper"
            onClick={setChoice}
            className="icon icon--paper"
          >Paper</div>
        </Link>
        <Link to="/game">
          <div
            data-id="scissors"
            onClick={setChoice}
            className="icon icon--scissors"
          >Scissors</div>
        </Link>
        <Link to="/game">
          <div
            data-id="rock"
            onClick={setChoice}
            className="icon icon--rock"
          >Rock</div>
        </Link>
      
    </div>
  );
};

export default HomePage;