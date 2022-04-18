import styled from "styled-components";
import React from "react";

const Black = styled.button`
  background-color: black;
`;

function BlackBall() {
  return <Black className="balls" />;
}

export default BlackBall;
