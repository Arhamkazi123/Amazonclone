import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyCECHQeEOUQE9zDRfqqsZUmGs3Ymgaw8Q0",
    authDomain: "amazauth-2e59d.firebaseapp.com",
    projectId: "amazauth-2e59d",
    storageBucket: "amazauth-2e59d.appspot.com",
    messagingSenderId: "122554530154",
    appId: "1:122554530154:web:86715a4cda4db6094e0d13"
  };

 export const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);

 export const db = getFirestore(app)


