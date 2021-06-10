import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq-KBtyRr2bIQtYeK_iDVInXQH6-IzaRE",
    authDomain: "facebook-clone-mia.firebaseapp.com",
    projectId: "facebook-clone-mia",
    storageBucket: "facebook-clone-mia.appspot.com",
    messagingSenderId: "179887170629",
    appId: "1:179887170629:web:647074cd3e63706dd6ef2c",
    measurementId: "G-61ZWBNNMDE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { authentication, provider };
export default database;
