import styled from "styled-components";
import React, { useState } from "react";
import RedBall from "../balls/RedBall";
import YellowBall from "../balls/YellowBall";
import GreenBall from "../balls/GreenBall";
import BrownBall from "../balls/BrownBall";
import BlueBall from "../balls/BlueBall";
import PinkBall from "../balls/PinkBall";
import BlackBall from "../balls/BlackBall";
import FreeBall from "../balls/FreeBall";
import { scoreBall } from "../../algos/ballFunctions";

const Container = styled.span`
  display: flex;
  margin: 5vh 5vh;
`;
function BallButtons(props) {
  function helloWorld () {
    console.log('hello world!')
    return
  }
  return (
    <>
      <Container>
        <RedBall props={props[1]}/>
        <YellowBall />
        <GreenBall  />
        <BrownBall/>
      </Container>
      <Container>
        <BlueBall onClick={scoreBall('blue')} />
        <PinkBall onClick={scoreBall('pink')} />
        <BlackBall onClick={scoreBall('black')} />
        <FreeBall onClick={scoreBall('free')} />
      </Container>
    </>
  );
}

export default BallButtons;
