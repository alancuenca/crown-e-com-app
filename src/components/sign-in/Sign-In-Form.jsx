import { useState, useContext } from "react";
import { signInWithGooglePopup, createUserDocFromAuth, signInAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../buttons/Button";
import './sign-in.scss'

import { UserContext } from "../../Context/UserContext";

const initialFormFields = {
    email: '',
    password: '',
};

const SignIn = () => {
    const [ signUpFields, setSignUpFields ] = useState(initialFormFields);
    const { email, password } = signUpFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setSignUpFields(initialFormFields);
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setSignUpFields({ ...signUpFields, [ name ]: value })
    };

    const handleSignInError = (error) => {
        switch (error.code) {
            case 'auth/wrong-password':
                alert('Incorrect password')
                break;
            case 'auth/user-not-found':
                alert('User email not found')
                break;
            default:
                console.log(error);
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();

        } catch (error) {
            handleSignInError(error);
        }
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    };

    return (
        <div className="sign-up-container">
            <h2>I already have an account</h2>
            <span>Sign in with an email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google sign in</Button>
                </div>

            </form>
        </div>
    );
};

export default SignIn;
