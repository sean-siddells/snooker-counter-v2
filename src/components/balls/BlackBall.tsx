import styled from "styled-components";
import React from "react"
import scoreBall from '../../algos/ballFunctions'

const Black = styled.button`
  background-color: black;
`

function BlackBall() {
  return <Black className='balls' onClick={scoreBall('black')}/>
}



export default BlackBall;
