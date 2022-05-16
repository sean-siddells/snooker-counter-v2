import styled from "styled-components";
import React from "react";
import scoreBall  from "../../algos/ballFunctions"

const Brown = styled.button`
  background-color: rgba(143, 9, 9, 0.685);
`;

function BrownBall() {
  return <Brown className="balls"  onClick={scoreBall('brown')}  />;
}

export default BrownBall;
