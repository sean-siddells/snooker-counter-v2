import styled from "styled-components"

const RemainingPoints = styled.div`
  text-align: center;
  font-size: 10vw;
`
const Header = styled.h2`
  font-size: 2.5vw;
`
export default function PointsRemaining (props) {

  return (
    <RemainingPoints>
      <Header>Points Remaining:</Header>
      {props.pointsRemaining}
    </RemainingPoints>
  )
}
