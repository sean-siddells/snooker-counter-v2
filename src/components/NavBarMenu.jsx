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
const Button = styled.button`
margin: auto 2vw;
display: fel
`

export default function NavBarMenu () {
  let [isHidden, setIsHidden] = useState(false)
  let [addPointsButtonHidden, setAddPointsButtonHidden] = useState(true)

  function handleAddPointsClick () {
    console.log('this is addpointsbutton state', addPointsButtonHidden)
    setIsHidden(!isHidden)
    return setAddPointsButtonHidden(!addPointsButtonHidden)
  }

  function handleSubmit (e) {
    e.preventDefault()
   return console.log('I still need to be set up!')
  }


  return (
    <>
      {isHidden ? null : <AddPoints onClick={handleAddPointsClick} >Add Points</AddPoints>}
      {addPointsButtonHidden ? null :
        <>
          <BallButtons/>
          <Wrapper>
            <div onClick= {handleSubmit}>
              <Button>Submit</Button>
            </div>
            <div onClick= {handleAddPointsClick}>
              <Button>Back</Button>
              </div>
          </Wrapper>
        </>}
    </>
  )
}

