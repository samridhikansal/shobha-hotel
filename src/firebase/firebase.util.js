import firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyCwnZtqq6FcTbMDGtC1egk0zn5owETG2zo",
  authDomain: "shobha-hotel.firebaseapp.com",
  databaseURL: "https://shobha-hotel.firebaseio.com",
  projectId: "shobha-hotel",
  storageBucket: "shobha-hotel.appspot.com",
  messagingSenderId: "651193214799",
  appId: "1:651193214799:web:0cc8d06761d0f4a3b5473a",
  measurementId: "G-09730KETS9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
export default firebase;
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
