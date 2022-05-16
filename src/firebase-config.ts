const config = {
  apiKey: "AIzaSyBF9aVQVeNDrK1CJ-t4U-fWaVEEt-zwraU",
  authDomain: "snooker-counter-822be.firebaseapp.com",
  projectId: "snooker-counter-822be",
  storageBucket: "snooker-counter-822be.appspot.com",
  messagingSenderId: "597890764263",
  appId: "1:597890764263:web:eb59de058de0bdf2858142",
};

export default function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}