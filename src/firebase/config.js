import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCFxCv2IFmgNUPsr5JcRbb6wve4102pw_I",
    authDomain: "reactphoto-62cdb.firebaseapp.com",
    databaseURL: "https://reactphoto-62cdb.firebaseio.com",
    projectId: "reactphoto-62cdb",
    storageBucket: "reactphoto-62cdb.appspot.com",
    messagingSenderId: "461436081286",
    appId: "1:461436081286:web:ae15a06f47e7e6bfbe2d07",
    measurementId: "G-F7F69YRCN0"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage,projectFirestore, timestamp }