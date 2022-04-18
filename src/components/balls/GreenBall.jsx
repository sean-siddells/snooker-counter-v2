import styled from "styled-components";
import React from "react";

const Green = styled.button`
  background-color: green;
`;

function GreenBall() {
  return <Green className="balls" />;
}

export default GreenBall;
