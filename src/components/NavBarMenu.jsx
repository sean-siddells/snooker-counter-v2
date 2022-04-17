import styled from 'styled-components'
import {useState} from 'react'
import BallButtons from './BallButtons'

const AddPoints = styled.button`
display: flex;
margin: 2.5vw auto;
position: center;
`

const Wrapper = styled.span`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`
export default function NavBarMenu () {
  let [isHidden, setIsHidden] = useState(false)
  let [buttonHidden, setButtonHidden] = useState(true)

  function handleHidden () {
    console.log('this is addpointsbutton state', buttonHidden)
    setIsHidden(!isHidden)
    return setButtonHidden(!buttonHidden)
  }

  function handleSubmit () {
   return console.log('I still need to be set up!')
  }

  return (
    <>
      {isHidden ? null :
      <>
        <AddPoints onClick={handleHidden} >Add Points</AddPoints>
        <AddPoints onClick={handleHidden} >Add Fouls</AddPoints>
      </>
      }
      {buttonHidden ? null :
        <>
          <BallButtons/>
          <Wrapper>
              <button onClick= {handleSubmit}>Submit</button>
              <button onClick= {handleHidden}>Back</button>
          </Wrapper>
        </>}
    </>
  )
}

