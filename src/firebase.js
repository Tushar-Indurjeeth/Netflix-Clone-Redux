import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCW_hmBC3xiv5WpGvtoeSFgkYgNwuSaQL0",
    authDomain: "netflix-clone-redux-c96b9.firebaseapp.com",
    projectId: "netflix-clone-redux-c96b9",
    storageBucket: "netflix-clone-redux-c96b9.appspot.com",
    messagingSenderId: "344042383766",
    appId: "1:344042383766:web:a635e78c5080bcd05295b7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;