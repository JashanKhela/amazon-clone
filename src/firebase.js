import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyADDRrPaPyQhUwvV4wezCLF6DfVMQC4MTU",
    authDomain: "clone-61bbc.firebaseapp.com",
    databaseURL: "https://clone-61bbc.firebaseio.com",
    projectId: "clone-61bbc",
    storageBucket: "clone-61bbc.appspot.com",
    messagingSenderId: "542375652612",
    appId: "1:542375652612:web:00ebcdccb7d3b663dc3451"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth } ;