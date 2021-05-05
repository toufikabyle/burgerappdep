import firebase from "firebase";
import "@firebase/firestore";

const config = {
    apiKey: "AIzaSyBi6OyZPtmoTe5w-miDirqwSquGQeb_gZg",
    authDomain: "bouaoun-d25d8.firebaseapp.com",
    projectId: "bouaoun-d25d8",
    storageBucket: "bouaoun-d25d8.appspot.com",
    messagingSenderId: "909689451291",
    appId: "1:909689451291:web:5099c93d9271eba04719be"
    
  };

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;