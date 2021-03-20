
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyBRdoakMQztTx0Cy9oiXwhNGT-_A974hPE",
    authDomain: "kieszku-insta.firebaseapp.com",
    projectId: "kieszku-insta",
    storageBucket: "kieszku-insta.appspot.com",
    messagingSenderId: "488539215788",
    appId: "1:488539215788:web:d1637a8ccb0dc5bdb74c09"
  };
  
  const firebase = Firebase.initializeApp(config); 
  const { FieldValue } = Firebase.firestore;

  
  
  export { firebase, FieldValue };