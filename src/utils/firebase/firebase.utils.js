import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

import {getFirestore,doc, addDoc, getDoc, setDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA2bvb-g2yHAgqgPL32NAFdZFb5-diN0-E",
  authDomain: "react-clothes-store-1e92a.firebaseapp.com",
  projectId: "react-clothes-store-1e92a",
  storageBucket: "react-clothes-store-1e92a.appspot.com",
  messagingSenderId: "401349915648",
  appId: "1:401349915648:web:f30ec2460b70d9c9ad54e5",
};

const firebaseapp = initializeApp(firebaseConfig);
// Authentication Function//

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// DataBase Function//
const db = getFirestore();

export const createUserDocumentsFromAuth = async (userAuth) => {
const userDocRef = doc(db,"users",userAuth.uid);

const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot.exists());


//if userData don't Exsist //
if(userSnapshot.exists() === false){
const{displayName, email} = userAuth;
const createdAt = new Date();

try{
  await setDoc(userDocRef, {
    displayName,
    email,
    createdAt,
  });
}catch (error) {
  console.log("error creating the user", error.message);
}
}

return userDocRef;

}
