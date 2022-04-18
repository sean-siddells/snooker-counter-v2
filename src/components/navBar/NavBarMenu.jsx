import styled from 'styled-components'
import {useState} from 'react'
import BallButtons from './BallButtons'

const AddPoints = styled.button`
  display: flex;
  margin: 2.5vw auto;
  position: center;
`

const NavBarWrapper = styled.div`
  width: ${window.screen.width - 100 + 'px'};
  height: ${window.screen.height - 200 + 'px'};
  z-index: 1;
  background-color: rgb(181, 215, 181);
  position: absolute;
  top: 25%;
  margin: 0 10%;
  border-radius: 10px;
`

const Wrapper = styled.span`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`
export default function NavBarMenu (props) {
  let [isHidden, setIsHidden] = useState(false)
  let [buttonHidden, setButtonHidden] = useState(true)

  function handleHidden () {
    setIsHidden(!isHidden)
    return setButtonHidden(!buttonHidden)
  }

  function handleSubmit () {
   return console.log('I still need to be set up!')
  }

  return (
    <NavBarWrapper>
      {isHidden ? null :
      <>
        <AddPoints onClick={handleHidden} >Add Points</AddPoints>
        <AddPoints onClick={handleHidden} >Add Fouls</AddPoints>
      </>
      }
      {buttonHidden ? null :
        <>
          <BallButtons props={props}/>
          <Wrapper>
            <button onClick= {handleSubmit}>Submit</button>
            <button onClick= {handleHidden}>Back</button>
          </Wrapper>
        </>}
  </NavBarWrapper>
  )
}

