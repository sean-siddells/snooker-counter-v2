import BallButtons from "./BallButtons"
import PointsRemaining from "./PointsRemaining"
import { useState, useEffect } from "react"
import PlayerScore from './PlayerScore'
import NavBarIcon from "./NavBarIcon"
import NavBarMenu from "./NavBarMenu"

function App() {

  let [isNavBarOpen, setNavBarOpen] = useState(false)
  const pointsRemaining = 147
  let [isPointsMenuOpen, setPointsMenuOpen] = useState(false)

  let player1 =
  {
    red: 0,
    yellow: 0,
    green: 0,
    brown: 0,
    blue: 0,
    pink: 0,
    black: 0,
    maxBreak: 0,
    fouls: {
      '4':0,
      '5':0,
      '6':0,
      '7':0
    },
    totalScore: 0,
  }

  let player2 = JSON.parse(JSON.stringify(player1))
  const [stats, setStats] = useState([pointsRemaining, player1, player2])


  function handleClick () {
    return setNavBarOpen(!isNavBarOpen)
  }

  return (
      <div className="App">
        <div onClick= {handleClick}>
          <NavBarIcon/>
        </div>
        <PlayerScore player1 = {stats[1]} player2= {stats[2]}/>
        <PointsRemaining pointsRemaining = {stats[0]}/>
        {isNavBarOpen ? <NavBarMenu/> : null}
      </div>
  );
}

export default App;
