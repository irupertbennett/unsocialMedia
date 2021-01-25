import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_8zxDbXxMbI5ixPbOkynLpx6g_je6A-w",
  authDomain: "unsocial-media-a8d91.firebaseapp.com",
  projectId: "unsocial-media-a8d91",
  storageBucket: "unsocial-media-a8d91.appspot.com",
  messagingSenderId: "991497033217",
  appId: "1:991497033217:web:16537c75c73c1d76385200",
  measurementId: "G-D98E8Y41GE"
};

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default}