import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"

import GameUi from "./component/UI";
import Score from "./component/score/score";
import HomePage from "./component/homepage/homepage";
import Footer from "./component/helpers/footer";


function App(){
  const [score, setScore] = useState(0);
  const [userPreference, setUserPreference] = useState("");
  return (
    <div className="container">

      <Score score={score} />

      <Routes>
        <Route exact path="/">
          <HomePage setUserPreference={setUserPreference}/>
        </Route>

        <Route path="/rock-paper-scissors">
          <GameUi userPreference={userPreference} score={score} setScore={setScore}/>
        </Route>
      </Routes>

      <Footer />

    </div>
  )
}

export default App;