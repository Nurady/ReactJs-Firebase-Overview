import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBfwASbWhWOnI0G5rZVpuLAQ4wNqO-lwqs',
  authDomain: 'simple-notes-firebase-d8e1c.firebaseapp.com',
  projectId: 'simple-notes-firebase-d8e1c',
  storageBucket: 'simple-notes-firebase-d8e1c.appspot.com',
  messagingSenderId: '464989288708',
  appId: '1:464989288708:web:58e560687158c8fa98b851',
  measurementId: 'G-F4QYTC1713',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// Get a reference to the database service
export const database = firebase.database();
export default firebase;
