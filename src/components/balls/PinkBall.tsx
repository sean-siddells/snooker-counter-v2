import styled from "styled-components";
import React from "react";
import scoreBall  from "../../algos/ballFunctions";

const Pink = styled.button`
  background-color: rgb(252, 134, 154);
`;

function PinkBall() {
  return <Pink className="balls" onClick={() => scoreBall('pink')} />;
}

export default PinkBall;
