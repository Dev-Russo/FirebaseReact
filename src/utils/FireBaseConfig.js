import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDZAqTtH3Rf_JvEEcAqiYaQznpMuvzGN4c",
  authDomain: "nyous-manha.firebaseapp.com",
  projectId: "nyous-manha",
  storageBucket: "nyous-manha.appspot.com",
  messagingSenderId: "274759026364",
  appId: "1:274759026364:web:53fea1e742bb4639c6b2b9"
};

const app = firebase.initializeApp(firebaseConfig);

//Para ultilizar o firestore nas paginas
export const db = app.firestore();

export default firebaseConfig;