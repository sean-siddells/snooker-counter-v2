import styled from "styled-components";
import React from "react";

const Pink = styled.button`
  background-color: rgb(252, 134, 154);
`;
function PinkBall() {
  return <Pink className="balls" />;
}

export default PinkBall;
