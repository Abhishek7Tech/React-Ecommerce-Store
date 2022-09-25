import {  useState } from "react";
import Button from "../button/button.component";
import FormInput from "../from-input/form-input.component";
import {
  signInWithGooglePopUp,
  createUserDocumentsFromAuth,
  signAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  console.log(formFields);


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWIthGoogle = async () => {
    console.log("Clicked");
    const { users } = await signInWithGooglePopUp();
    
    // const userDocRef = await createUserDocumentsFromAuth(users);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Email and Password Required");
    }
    try {
      const {user} = await signAuthWithEmailAndPassword(email, password);      
      resetFormFields();
    } catch (err) {
      switch(err.code) {
        case "auth/wrong-password": alert("Incorrect Password");
        break;
        case "auth/user-not-found": alert ("User not found");
        break;
        default: alert("Something Went Wrong! Contact Admin");
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputDetails={{
            type: "",
            required: true,
            name: "email",
            onChange: handleChange,
            value: email,
          }}
        ></FormInput>

        <FormInput
          label="Password"
          inputDetails={{
            type: "password",
            required: true,
            name: "password",
            onChange: handleChange,
            value: password,
          }}
        ></FormInput>
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWIthGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
