import styled from "styled-components";
import React from "react";
import { scoreBall } from "../../algos/ballFunctions";

const Free = styled.button`
  background-color: whitesmoke;
  font-style: bold;
  font-size: 1.25vw;
`;

function FreeBall() {
  return <Free className="balls" onClick={scoreBall()}/>;
}

export default FreeBall;
