import styled from "styled-components";
import React from "react";
import scoreBall  from "../../algos/ballFunctions"

const Green = styled.button`
  background-color: green;
`;

function GreenBall() {
  return <Green className="balls" onClick={scoreBall('green')} />
}

export default GreenBall;
