import styled from "styled-components";
import React from "react";

const Blue = styled.button`
  background-color: rgb(55, 55, 218);
`;

function BlueBall() {
  return <Blue className="balls" />;
}

export default BlueBall;
