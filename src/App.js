import React, { useState } from "react";
import Score from "./components/score/Score";
import HomePage from "./components/homepage/Homepage";
import GameUi from "./components/UI/GameUi";
import Footer from "./components/helpers/Footer";
import {  BrowserRouter,
  Routes,
  Route, } from "react-router-dom";

function App() {
  const [preference, setPreference] = useState("");
  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <div className="container">
        <Score score={score} />
        <Routes>
          <Route exact path="/" element={ <HomePage setPreference={setPreference} />}  />
          <Route path="/game" element={<GameUi score={score} preference={preference} setScore={setScore} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    );
}

export default App;
