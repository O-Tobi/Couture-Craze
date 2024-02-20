import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase";
const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <p>Sign In Page</p>
            <button type="button"  onClick = {logGoogleUser}>Sign-in with Google</button>
        </div>
    )
};

export default SignIn;