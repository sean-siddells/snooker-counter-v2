import styled from "styled-components"
import React, {useState} from "react"

const RemainingPoints = styled.h1`
  text-align: center;
  font-size: 5rem;
`

function PointsRemaining (props) {
  const [pointsLeft, setPointsLeft] = useState(props.props[0])
  return (
    <RemainingPoints>{pointsLeft}</RemainingPoints>
  )
}

export default PointsRemaining