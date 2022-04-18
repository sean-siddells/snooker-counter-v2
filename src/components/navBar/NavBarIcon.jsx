import styled from "styled-components";
import React from "react";

const SVG = styled.svg`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const Rect = styled.rect`
  width: 100px;
  height: 20px;
  margin-top: 10px;
  rx: 10;
`;
export default function NavBarIcon() {
  return (
    <SVG viewBox="0 0 100 80">
      <Rect />
      <Rect y="30" />
      <Rect y="60" />
    </SVG>
  );
}
