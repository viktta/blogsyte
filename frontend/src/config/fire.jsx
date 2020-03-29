import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA8a0djHeSyPbYfE_PFBbWTnA2M5ijhCvo",
  authDomain: "blogsyte-5980f.firebaseapp.com",
  databaseURL: "https://blogsyte-5980f.firebaseio.com",
  projectId: "blogsyte-5980f",
  storageBucket: "blogsyte-5980f.appspot.com",
  messagingSenderId: "102149390376",
  appId: "1:102149390376:web:eb9b7ea6ed6ecb0f39751d"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
