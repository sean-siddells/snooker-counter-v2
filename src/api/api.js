import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

//posting to firebase
export async function postToFirebase(userInfo, auth, history) {
  try {
    await addDoc(collection(getFirestore(), "Games"), {
      lastUpdated: serverTimestamp(),
      player1LastBreak: userInfo.player1.lastBreak,
      player1Name: userInfo.player1.name,
      player1Score: userInfo.player1.totalScore,
      player2LastBreak: userInfo.player2.lastBreak,
      player2Name: userInfo.player2.name,
      player2Score: userInfo.player2.totalscore,
      pointsRemaining: userInfo.pointsRemaining,
      redsRemaining: userInfo.redsRemaining,
    }).then(() => {
      history.push("/");
      return;
    });
  } catch (error) {
    console.error("Error posting to firebase", error);
  }
}
