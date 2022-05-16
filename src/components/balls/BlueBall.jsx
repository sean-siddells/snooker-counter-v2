import styled from "styled-components";
import React from "react";
import { scoreBall } from "../../algos/ballFunctions";

const Blue = styled.button`
  background-color: rgb(55, 55, 218);
`;

function BlueBall() {
  return <Blue className="balls" onClick={scoreBall('blue')}/>;
}

export default BlueBall;
