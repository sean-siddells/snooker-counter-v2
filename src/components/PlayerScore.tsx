import styled from "styled-components";
import React from "react";

const Container = styled.span`
  display: flex;
  margin: 0 auto;
`;
const Score = styled.div`
  margin: auto;
  font-size: 20vw;
  justify-content: center;
  text-align: center;
`;
const Header = styled.h1`
  font-size: 10vw;
`;
export default function PlayerScore(props) {
  const player1Score = props.player1.totalScore;
  const player2Score = props.player2.totalScore;
  return (
    <Container>
      <Score>
        <Header>Player 1</Header>
        {player1Score}
      </Score>
      <Score>
        <Header>Player 2</Header>
        {player2Score}
      </Score>
    </Container>
  );
}
