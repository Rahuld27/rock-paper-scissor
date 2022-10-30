import React, { useState } from "react";
import Score from "./components/score/Score";
import HomePage from "./components/homepage/Homepage";
import GameUi from "./components/UI/GameUi";
import Footer from "./components/helpers/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  const [preference, setPreference] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Score score={score} />
        <Routes>
          <Route exact path="/">
            <HomePage setPreference={setPreference} />
          </Route>
          <Route path="/game">
            <GameUi preference={preference} score={score} setScore={setScore} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
