import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBGXRt2SWOXOvSggzia1JrePMq1V4yxSE",
  authDomain: "long-terminal-391203.firebaseapp.com",
  databaseURL:
    "https://long-terminal-391203-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "long-terminal-391203",
  storageBucket: "long-terminal-391203.appspot.com",
  messagingSenderId: "693911264219",
  appId: "1:693911264219:web:95f11d892152b5a50aa5fe",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
