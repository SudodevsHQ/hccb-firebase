// import API_KEY from '../config';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA5khErFP1AQwT-FAOpShD0Zi971wFz5A0',
  authDomain: 'hccb-firebase.firebaseapp.com',
  databaseURL: 'https://hccb-firebase.firebaseio.com',
  projectId: 'hccb-firebase',
  storageBucket: 'hccb-firebase.appspot.com',
  messagingSenderId: '973138753385',
  appId: '1:973138753385:web:7089efc9b3f7c56d30eff8',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
