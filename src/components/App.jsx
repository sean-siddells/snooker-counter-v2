import BallButtons from "./BallButtons"
import PointsRemaining from "./PointsRemaining"
import { useState, useEffect } from "react"
import PlayerPointsMenu from './PlayerPointsMenu'
import NavBarIcon from "./NavBarIcon"

function App() {

  let [isNavBarOpen, setNavBarOpen] = useState(false)

  function handleClick () {
    console.log('im clicked')
    return setNavBarOpen(!isNavBarOpen)
  }

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
  const pointsRemaining = 147
  const [stats, setStats] = useState([pointsRemaining, player1, player2])


  return (
      <div className="App">
        <div onClick= {handleClick}>
          <NavBarIcon/>
        </div>
        <PointsRemaining props={stats}/>
        {isNavBarOpen ? <PlayerPointsMenu/> : null}
      </div>
  );
}

export default App;
