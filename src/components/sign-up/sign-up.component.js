import { useState } from "react";
import { createAuthWithEmailAndPassword, createUserDocumentsFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../from-input/form-input.component";
import "./sign-up.styles.scss";
const defaultFormFIelds = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword:''
}

const SignUpForm =() => {
    const [formFields, setFormFields] = useState(defaultFormFIelds);
    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFIelds);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try{
           const {user} = await createAuthWithEmailAndPassword(email,password);        
            console.log(user);
            await createUserDocumentsFromAuth(user, {displayName});
            resetFormFields();
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert("Cannot create user, email already in use");
            }
            console.log(err);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name] : value});
    }

return (
    <div className = 'sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit = {handleSubmit}>
            <FormInput label = "Display Name" inputDetails = {
                {
                    type :"text",
                     required : true, 
                     name : "displayName",
                      onChange: handleChange,
                     value: displayName 
                }
            } />  

              <FormInput label = "Email" inputDetails = {
                {
                    type :"email",
                     required : true, 
                     name : "email",
                      onChange: handleChange,
                     value: email 
                }
            } />          
    
    <FormInput label = "Password" inputDetails = {
                {
                    type :"password",
                     required : true, 
                     name : "password",
                      onChange: handleChange,
                     value: password 
                }
            } />  
   
   <FormInput label = "Confirm Password" inputDetails = {
                {
                    type :"password",
                     required : true, 
                     name : "confirmPassword",
                      onChange: handleChange,
                     value: confirmPassword 
                }
            } />  
            <Button children={'Sign Up'} buttonType = {'inverted'} otherprops = {{type:'submit'}} />
        </form>
    </div>
)
}
export default SignUpForm;