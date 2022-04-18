import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PointsRemaining from "./PointsRemaining";
import PlayerScore from "./PlayerScore";
import NavBarIcon from "./navBar/NavBarIcon";
import NavBarMenu from "./navBar/NavBarMenu";

function App() {
  const [isNavBarOpen, setNavBarOpen] = useState(false);
  const pointsRemaining = 147;

  const player1 = {
    red: 0,
    yellow: 0,
    green: 0,
    brown: 0,
    blue: 0,
    pink: 0,
    black: 0,
    maxBreak: 0,
    fouls: {
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    },
    totalScore: 0,
  };
  const player2 = JSON.parse(JSON.stringify(player1));

  const [stats, setStats] = useState([pointsRemaining, player1, player2]);

  console.log("this is player 1 stats", stats[1]);
  console.log("this is player 2 stats", stats[2]);

  function handleClick() {
    return setNavBarOpen(!isNavBarOpen);
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="navbar-button" onClick={handleClick}>
                <NavBarIcon />
              </div>
              <PlayerScore player1={stats[1]} player2={stats[2]} />
              <PointsRemaining pointsRemaining={stats[0]} />
              {isNavBarOpen ? <NavBarMenu props={stats} /> : null}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
