import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAYI2CUNlvdQ6it4MzQLakOn2DriiCNCL0',
  authDomain: 'discord-app-clone-543e0.firebaseapp.com',
  databaseURL: 'https://discord-app-clone-543e0.firebaseio.com',
  projectId: 'discord-app-clone-543e0',
  storageBucket: 'discord-app-clone-543e0.appspot.com',
  messagingSenderId: '478052932257',
  appId: '1:478052932257:web:91f4a6b315911403d96ee0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
