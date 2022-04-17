import styled from 'styled-components'
import BallButtons from "./BallButtons"
import PointsRemaining from "./PointsRemaining"
import { useState, useEffect } from "react"
import PlayerScore from './PlayerScore'
import NavBarIcon from "./NavBarIcon"
import NavBarMenu from "./NavBarMenu"

const screenWidth = `${window.screen.width}`
const screenHeight = `${window.screen.height}`

const NavBarWrapper = styled.div`
  width: ${screenWidth - 100 + 'px'};
  height: ${screenHeight - 200 + 'px'};
  z-index: 1;
  opacity: 0.9;
  background-color: rgb(181, 215, 181);
  position: absolute;
  top: 25%;
  margin: 0 10%;
  transition: width 5s, height 5s;
  border-radius: 10px;
`

function App() {

  let [isNavBarOpen, setNavBarOpen] = useState(false)
  const pointsRemaining = 147

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
        <div className='navbar-button'onClick= {handleClick}>
          <NavBarIcon/>
        </div>
        <PlayerScore player1 = {stats[1]} player2= {stats[2]}/>
        <PointsRemaining pointsRemaining = {stats[0]}/>
        {isNavBarOpen ?
          <NavBarWrapper>
            <NavBarMenu/>
          </NavBarWrapper>
          : null
        }
      </div>
  );
}

export default App;
