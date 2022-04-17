import styled from "styled-components"
import React, {useState} from "react"

const RemainingPoints = styled.h1`
  text-align: center;
  font-size: 10vw;
`
const Header = styled.h1`
  font-size: 5vw;
`
function PointsRemaining (props) {
  const [pointsLeft, setPointsLeft] = useState(props.props[0])
  return (
    <RemainingPoints>
      <Header>Points Remaining:</Header>
      {pointsLeft}
    </RemainingPoints>
  )
}

export default PointsRemaining