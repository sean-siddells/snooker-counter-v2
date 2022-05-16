export default function scoreBall(colour: string) {
  let ballValue: number = 1
  console.log(colour + 'ball has been clicked')
  switch (colour) {
    case "yellow":
      ballValue = 2
      break
    case "green":
      ballValue = 3
      break
    case "brown":
      ballValue = 4
      break
    case "blue":
      ballValue = 5
      break
    case "pink":
      ballValue = 6
      break
    case "black":
      ballValue = 7;
      break
    case "free":
      ballValue = 1
      break
    default:
      break
  }
  return null
}


