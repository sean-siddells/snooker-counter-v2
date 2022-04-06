import BallButtons from "./BallButtons"
import PointsRemaining from "./PointsRemaining"

function App() {
  let player1 =
  {
    red: 0,
    yellow: 0,
    green: 0,
    brown: 0,
    blue: 0,
    pink: 0,
    black: 0,
    maxBreak: 0,
    fouls: {
        '4':0,
        '5':0,
        '6':0,
        '7':0
    },
    totalScore: 0,
  }
  let player2 = JSON.parse(JSON.stringify(player1))
  const pointsRemaining = 147
  const stats = [pointsRemaining, player1, player2]
  return (
    <div className="App">
      <PointsRemaining props={stats}/>
      <BallButtons/>
    </div>
  );
}

export default App;
