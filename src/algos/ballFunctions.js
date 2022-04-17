function scoreBall (colour) {
  const ballColour = colour
  let ballValue = 1

  switch (ballColour) {
    case 'yellow':
      ballValue = 2
      break
    case 'green':
      ballValue = 3
      break
    case 'brown':
      ballValue = 4
      break
    case 'blue':
      ballValue = 5
      break
    case 'pink':
      ballValue = 6
      break
    case 'black':
      ballValue = 7
      break
    default:
      break
  }

  return ballValue
}


module.exports  = {
  scoreBall
}