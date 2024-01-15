import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDa1jdc8lKkX10PstX9kU1-Fp7C8aHlb-Q",
    authDomain: "movies-fans-84734.firebaseapp.com",
    projectId: "movies-fans-84734",
    storageBucket: "movies-fans-84734.appspot.com",
    messagingSenderId: "215290031340",
    appId: "1:215290031340:web:2d09df93995128a97909c9",
    measurementId: "G-LEWX5K3KQL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);