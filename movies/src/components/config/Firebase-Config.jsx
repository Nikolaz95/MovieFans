import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-uhADEnLqH9QPB2p_wJcm4GhDFWuJzMI",
    authDomain: "movie-7e661.firebaseapp.com",
    projectId: "movie-7e661",
    storageBucket: "movie-7e661.appspot.com",
    messagingSenderId: "640925528505",
    appId: "1:640925528505:web:d39a4ee6d819bb790c0668",
    measurementId: "G-7HW9F2EGYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);