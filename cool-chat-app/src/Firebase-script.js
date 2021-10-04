import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDHC4GfLj1AUvxTA-SXUmrcFnDxaYbXw5w",
    authDomain: "extra-cool-chat-app.firebaseapp.com",
    projectId: "extra-cool-chat-app",
    storageBucket: "extra-cool-chat-app.appspot.com",
    messagingSenderId: "979273607833",
    appId: "1:979273607833:web:bec37dfa540644fa0f6608",
    measurementId: "G-G2JKG2MCHP"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;