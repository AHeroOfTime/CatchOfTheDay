import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB96P3IhnnwnaT6Dy77f72V0rwxiIKFsFg',
  authDomain: 'catch-of-the-day-aaron-r.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-aaron-r.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
