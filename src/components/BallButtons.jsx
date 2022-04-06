import styled from "styled-components"
import {useState} from "react"
import RedBall from "./balls/RedBall"


const Yellow = styled.button`
  background-color: rgb(255, 230, 0);
`
const Green= styled.button`
  background-color: green;
`
const Brown= styled.button`
  background-color: rgba(143, 9, 9, 0.685);
`
const Blue= styled.button`
  background-color: rgb(55, 55, 218);
`
const Pink= styled.button`
  background-color: rgb(252, 134, 154);
`
const Black= styled.button`
  background-color: black;
`
const Free= styled.button`
  background-color: whitesmoke;
  font-style: bold;
  font-size: 1.25vw;
`
const Container= styled.span`
  display: flex;
  margin: 0 auto;
`
function BallButtons () {

  return (
    <Container>
      <RedBall/>
      <Yellow className="balls"/>
      <Green className="balls"/>
      <Brown className="balls"/>
      <Blue className="balls"/>
      <Pink className="balls"/>
      <Black className="balls"/>
      <Free className= "balls"/>
    </Container>
  )
}

export default BallButtons