import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCKZjEjTpSj2rLOFzRfI4GlUK1wZ3J3VhU",
    authDomain: "linkedin-clone-reactproject.firebaseapp.com",
    projectId: "linkedin-clone-reactproject",
    storageBucket: "linkedin-clone-reactproject.appspot.com",
    messagingSenderId: "1069460846752",
    appId: "1:1069460846752:web:5513675cda0555e3d771c5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebaseApp.auth()

  //explicit exports
  export{auth};
  export default db;