import styled from "styled-components"
import {useState} from "react"
import RedBall from "../balls/RedBall"
import YellowBall from "../balls/YellowBall"
import GreenBall from "../balls/GreenBall"
import BrownBall from "../balls/BrownBall"
import BlueBall from "../balls/BlueBall"
import PinkBall from "../balls/PinkBall"
import BlackBall from "../balls/BlackBall"
import FreeBall from "../balls/FreeBall"



const Container= styled.span`
  display: flex;
  margin: 5vh 5vh;
`
function BallButtons (props) {

  return (
    <>
    <Container>
      <RedBall props={props[1]}/>
      <YellowBall/>
      <GreenBall/>
      <BrownBall/>
    </Container>
    <Container>
      <BlueBall/>
      <PinkBall/>
      <BlackBall/>
      <FreeBall/>
    </Container>
    </>
  )
}

export default BallButtons