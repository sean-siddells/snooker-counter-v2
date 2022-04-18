import styled from "styled-components";
import React from "react";
const Yellow = styled.button`
  background-color: rgb(255, 230, 0);
`;

function YellowBall() {
  return <Yellow className="balls" />;
}

export default YellowBall;
