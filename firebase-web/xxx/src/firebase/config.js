import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDurk3hpIoQo5nIcazXVQj6J_Hocykw6b0",
    authDomain: "webxx-54293.firebaseapp.com",
    projectId: "webxx-54293",
    storageBucket: "webxx-54293.appspot.com",
    messagingSenderId: "157140495287",
    appId: "1:157140495287:web:835adfef3334227b9cd632",
    measurementId: "G-SB9HPJL72R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export {app,storage,db}
