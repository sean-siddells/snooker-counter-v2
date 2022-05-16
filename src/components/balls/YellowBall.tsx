import styled from "styled-components";
import React from "react";
import scoreBall  from "../../algos/ballFunctions";

const Yellow = styled.button`
  background-color: rgb(255, 230, 0);
`;

function YellowBall() {
  return <Yellow className="balls" onClick={() => scoreBall('yellow')}/>;
}

export default YellowBall;
