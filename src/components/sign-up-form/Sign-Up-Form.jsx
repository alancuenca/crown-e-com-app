import { useState, useContext, useCallback } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utilities/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../buttons/Button";
import './sign-up.scss';

import { UserContext } from "../../Context/UserContext";

const formFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUp = () => {
    const [ signUpFields, setSignUpFields ] = useState(formFields);
    const { displayName, email, password, confirmPassword } = signUpFields;

    const { setCurrentUser } = useContext(UserContext);

    const handleChange = useCallback((e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setSignUpFields({ ...signUpFields, [ name ]: value })
    }, [signUpFields]);

    const handleSubmit = useCallback(async (e) => {
            e.preventDefault();
            if (password !== confirmPassword) {
                alert("Passwords do not match")
                return
            };

            try {
                const { user } = await createAuthUserWithEmailAndPassword(email, password);
                setCurrentUser(user);
                await createUserDocFromAuth(user, { displayName });
                resetFormFields();

            } catch (error) {
                alert(error)
                console.log("Error signing up", error);
            }
    }, [ email, password, confirmPassword, displayName, setCurrentUser ]);

    const resetFormFields = () => {
        setSignUpFields(formFields);
    }


    return (
        <div className="sign-up-container">
            <h2>Don't Have An Account?</h2>
            <span>Sign up with an email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                    />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUp;
