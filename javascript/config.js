// Import the functions you need from the SDKs you need

//config for firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL_MJjTUVgYLT5-DAEIMz-OMYzDuMd7xE",
  authDomain: "spotify-listen-together-f80be.firebaseapp.com",
  projectId: "spotify-listen-together-f80be",
  storageBucket: "spotify-listen-together-f80be.appspot.com",
  messagingSenderId: "152295877125",
  appId: "1:152295877125:web:091d76f9e4e9c826788a6c",
  measurementId: "G-M6J7FM1YT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//config for spotify
var client_id = "d661dc99991846f18487325c0815727d"; // need to obtain from spotify auth process
var redirect_uri = "link to our website";