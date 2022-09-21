//Gooogle Redirect //

// import { getRedirectResult } from "@firebase/auth";
// import { useEffect } from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentsFromAuth,
  signInWithGoogleRedirect,
  // auth,
} from "../../../utils/firebase/firebase.utils";
const SignIn = () => {
  const signInWIthGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentsFromAuth(user);
  };

  // const signInWIthGoogle2 = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  // };

  //Redirect 
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);

  //     if(response) {
  //       const userDocRef = await createUserDocumentsFromAuth(response.user);
  //     }
  //   })();
  // }, []);
  return (
    <div>
      <button onClick={signInWIthGoogle}>Sign in with Google</button>
      {/* <button onClick={signInWIthGoogle2}>Sign in with Google Redirect</button> */}
    </div>
  );
};

export default SignIn;
