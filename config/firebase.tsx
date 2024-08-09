
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAwJ-7Yr2U_nuiJkyyD3KnnCPOLOY8q4Pg",
  authDomain: "commune-f010a.firebaseapp.com",
  projectId: "commune-f010a",
  storageBucket: "commune-f010a.appspot.com",
  messagingSenderId: "976883236624",
  appId: "1:976883236624:web:97aaeb3a0ee1bf600a6f95",
  measurementId: "G-0R7EB8XBBQ",
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const googleprovider = new GoogleAuthProvider();
//const analytics = getAnalytics(app);