import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAwjLQUCCEwHC4sQImTUuR30CihBr3fRyQ",
  authDomain: "flashcard-firestore.firebaseapp.com",
  databaseURL: "https://flashcard-firestore.firebaseio.com",
  projectId: "flashcard-firestore",
  storageBucket: "",
  messagingSenderId: "272958023687"
};
firebase.initializeApp(config);

export default firebase;
