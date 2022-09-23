//Gooogle Redirect //

// import { getRedirectResult } from "@firebase/auth";
// import { useEffect } from "react";
import "./authentication.styles.scss";
import SignInForm from "../../sign-in/sign-in.component";
import SignUpForm from "../../sign-up/sign-up.component";
const SignIn = () => {
  

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
    <div className="authentication-container">
     <SignInForm />
     <SignUpForm />
      {/* <button onClick={signInWIthGoogle2}>Sign in with Google Redirect</button> */}
    </div>
  );
};

export default SignIn;
