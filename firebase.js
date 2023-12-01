// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFARNpBOcNK1MZLonPeK8QCzjtbnUGVJQ",
  authDomain: "rn-todo-app-72609.firebaseapp.com",
  projectId: "rn-todo-app-72609",
  storageBucket: "rn-todo-app-72609.appspot.com",
  messagingSenderId: "34455779265",
  appId: "1:34455779265:web:d53ddaf44596e11a2de140",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
