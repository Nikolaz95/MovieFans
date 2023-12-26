// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEXNbuWSMaMEuj-TZSIxl_QZvvf2kYjxI",
    authDomain: "movie-fans-c6892.firebaseapp.com",
    projectId: "movie-fans-c6892",
    storageBucket: "movie-fans-c6892.appspot.com",
    messagingSenderId: "189358658122",
    appId: "1:189358658122:web:30e219ee57421a9e9cccb3",
    measurementId: "G-T5P9ZCS9B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);