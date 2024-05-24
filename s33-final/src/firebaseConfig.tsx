
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQhh3RUs9cQbNuNe-sAMTOgH2Hd14d61E",
  authDomain: "meditation-app-2c613.firebaseapp.com",
  projectId: "meditation-app-2c613",
  storageBucket: "meditation-app-2c613.appspot.com",
  messagingSenderId: "1064098192189",
  appId: "1:1064098192189:web:6488d39159b837ecd64354"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };