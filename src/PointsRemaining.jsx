import styled from "styled-components"
import React, {useState} from "react"

const RemainingPoints = styled.h1`
  text-align: center;
  font-size: 10rem;
`

function PointsRemaining () {
  const [pointsLeft, setPointsLeft] = useState(147)
  return (
    <RemainingPoints>{pointsLeft}</RemainingPoints>
  )
}

export default PointsRemaining