import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuJUj6oNDM0b0qADjWbjX6GVu382KrPLw",
  authDomain: "blogsyte.firebaseapp.com",
  databaseURL: "https://blogsyte.firebaseio.com",
  projectId: "blogsyte",
  storageBucket: "blogsyte.appspot.com",
  messagingSenderId: "420786876035",
  appId: "1:420786876035:web:282bc8986514b49691b5b6",
  measurementId: "G-KXTYCD68XH"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
