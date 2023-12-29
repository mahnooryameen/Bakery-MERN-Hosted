import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMXa9jXvd1qh2WaTJKIPVTmMo-OS28eY0",
  authDomain: "api-final-260f0.firebaseapp.com",
  projectId: "api-final-260f0",
  storageBucket: "api-final-260f0.appspot.com",
  messagingSenderId: "274037777196",
  appId: "1:274037777196:web:022262dae98062305a4289"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)