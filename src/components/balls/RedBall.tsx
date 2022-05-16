import styled from "styled-components";
import React, { useState } from "react";
import scoreBall from "../../algos/ballFunctions";
const Red = styled.button`
  background-color: rgb(179, 15, 15);
  font-style: bold;
  font-size: 20px;
  line-height: 5vh;
`;
const Invisible = styled.button`
  visibility: hidden;
`;

function RedBall(props) {
  let [redCount, setRedCount] = useState(15);



  return (
    <>
      {redCount > 0 ? (
        <Red
          className="balls"
          onClick={() => {
            setRedCount(redCount - 1)
            scoreBall('red')
          }}
        >
          {redCount}
        </Red>
      ) : (
        <Invisible className="balls" />
      )}
    </>
  );
}
export default RedBall;
