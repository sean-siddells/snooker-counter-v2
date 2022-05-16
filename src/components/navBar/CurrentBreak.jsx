import styled from 'styled-components'
import React from 'react'
import { scoreBall } from '../../algos/ballFunctions'
import BallButtons from './BallButtons'

const Wrapper = styled.span`
  display: flex;
  height: fit-content;
  width: fit-content;
  color = light-grey;
`
export default function CurrentBreak () {
  return(
    <Wrapper>
      <BallButtons/>
    </Wrapper>
  )
}