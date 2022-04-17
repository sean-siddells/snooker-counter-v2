import styled from "styled-components"
import {useState} from "react"

const Red  = styled.button`
  background-color: rgb(179, 15, 15);
  font-style: bold;
  font-size:20px;
  line-height:5vh;
`
const Invisible = styled.button`
  visibility: hidden;
`

function RedBall (props) {
  let [redCount, setRedCount] = useState(15)


  return(
    <>
      {redCount > 0 ?
       <Red className="balls" onClick={() => {setRedCount(redCount -1)}}>{redCount}</Red> :
       <Invisible className='balls'/>
      }
    </>
  )
}
export default RedBall