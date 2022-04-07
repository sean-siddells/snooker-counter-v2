import styled from "styled-components"

const Free= styled.button`
  background-color: whitesmoke;
  font-style: bold;
  font-size: 1.25vw;
`

function FreeBall () {
  return(
    <Free className="balls" />
  )
}

export default FreeBall