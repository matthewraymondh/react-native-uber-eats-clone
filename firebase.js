import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKjMxb1PaK7bniXOjWr6tlM8-br7c7zuo",
    authDomain: "uber-eats-2-54fec.firebaseapp.com",
    projectId: "uber-eats-2-54fec",
    storageBucket: "uber-eats-2-54fec.appspot.com",
    messagingSenderId: "881163264774",
    appId: "1:881163264774:web:19099a68cc43b203d2b487"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;