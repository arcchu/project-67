import firebase from 'firebase';


  const firebaseConfig = {
  apiKey: "AIzaSyBSwiYDmre_z2F-jZFfwB7gU1BP1XqJBNA",
  authDomain: "wireless-buzzer-107b3.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-107b3-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-107b3",
  storageBucket: "wireless-buzzer-107b3.appspot.com",
  messagingSenderId: "593355219602",
  appId: "1:593355219602:web:bb3be3ea1ca9e622ca3c4b",
  measurementId: "G-K7NR9V70E7"
};  //paste your SDK here


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();