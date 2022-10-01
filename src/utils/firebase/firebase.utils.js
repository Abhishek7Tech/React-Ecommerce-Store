import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import {getFirestore,doc, getDocs, getDoc, setDoc, collection, writeBatch} from "firebase/firestore";
import CategoryItem from "../../components/category-main/category-item.component";


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

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
}

export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db, 'categories');
  const categoriesSnapShot = await getDocs(collectionRef);
  const categoriesMap = categoriesSnapShot.docs.map((docs) => docs.data());
  
 
  return categoriesMap;
}

export const createUserDocumentsFromAuth = async (userAuth, additionalInfo = {}) => {
  if(!userAuth) return;
const userDocRef = doc(db,"users",userAuth.uid);

const userSnapshot = await getDoc(userDocRef);


//if userData don't Exsist //
if(userSnapshot.exists() === false){
const{displayName, email} = userAuth;
const createdAt = new Date();

try{
  await setDoc(userDocRef, {
    displayName,
    email,
    createdAt,
    ...additionalInfo
  });
}catch (error) {
  console.log("error creating the user", error.message);
}
}

return userDocRef;

}

export const createAuthWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password);
}

export const signAuthWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => {
  return await signOut(auth);
}

// listens to authentication signin,signup etc //
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
}