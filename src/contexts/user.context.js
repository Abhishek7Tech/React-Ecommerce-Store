import { createContext,useEffect,useState } from "react";
import { createUserDocumentsFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
currentUser: null,
setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    // runs when authentication state changes //
    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
          if(user){
              createUserDocumentsFromAuth(user);
          }
          setCurrentUser(user);
          console.log(user);
      });
      return unsubscribe;
    },[])

    return <UserContext.Provider value = {value}>{children}</UserContext.Provider>
}

