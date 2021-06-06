import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyD-vZ2DJxsw35R1jHd1JmSJlP1GbqbxS80",
    authDomain: "movierewiews-7411a.firebaseapp.com",
    projectId: "movierewiews-7411a",
    storageBucket: "movierewiews-7411a.appspot.com",
    messagingSenderId: "949436308498",
    appId: "1:949436308498:web:43310ca223a00110a4cccb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const storage=firebase.storage();
  const auth=firebase.auth();
  export {db,storage,auth};