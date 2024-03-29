import { useState } from 'react';
import { 
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
     } from '../../utils/firebase/firebase';

import FormInput from '../form-input/form-input';
import './sign-up-form.scss';
import Button from '../button/button';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (password !== confirmPassword) {
            alert('Password does not match');
            return; // Prevent further execution of the function
        }
    
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
    
            console.log('User created successfully:', user);
        } catch (error) {
            if(error.code ==='auth/email-already-in-use'){
                alert('Cannot create user, email already in use')
            }else{
                console.error('User creation encountered an error:', error.message);
                alert('An error occurred during user creation. Please try again later.');
            }
            
        }
    };
    


    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value })
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                label= "Display Name"
                type="text" 
                required 
                onChange={handleChange} 
                name='displayName'
                value={displayName}
                />

                
                <FormInput
                label ='Email' 
                type="email" 
                required 
                onChange={handleChange} 
                name='email'
                value={email}
                />

                
                <FormInput
                label = 'Password' 
                type="password" 
                required 
                onChange={handleChange}
                name='password'
                value={password}
                 />

              
                <FormInput 
                label = 'Confirm Password'
                type="password" 
                required 
                onChange={handleChange} 
                name='confirmPassword'
                value={confirmPassword}/>
                <Button buttonType='google' type="submit">Sign Up</Button>
            </form>
        </div>
    )
};

export default SignUpForm;