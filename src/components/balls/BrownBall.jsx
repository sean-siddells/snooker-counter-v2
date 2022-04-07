import styled from 'styled-components'

const Brown= styled.button`
  background-color: rgba(143, 9, 9, 0.685);
`

function BrownBall () {
  return(
    <Brown className='balls'/>
  )
}

export default BrownBall