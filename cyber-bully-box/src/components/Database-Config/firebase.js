import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyCUBatiNsF8HEJERQcvnAQg4MEu9iQqWgI",
  authDomain: "upstandr-app.firebaseapp.com",
  databaseURL: "https://upstandr-app.firebaseio.com",
  projectId: "upstandr-app",
  storageBucket: "",
  messagingSenderId: "564765406163"
};
firebase.initializeApp(config);
export default firebase;
