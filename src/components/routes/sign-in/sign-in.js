import {
    signInWithGooglePopup,
    createUserDocumentFromAuth, 
    } from "../../../utils/firebase/firebase";

import SignUpForm from "../../sign-up/sign-up-form";

const SignIn = () => {
    
    const logGoogleUser = async () =>{
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    

    return (
        <div>
            <p>Sign In</p>
            <button type="button"  onClick = {logGoogleUser}>Sign-in with Google</button>
            <SignUpForm />
        </div>
    )
};

export default SignIn;