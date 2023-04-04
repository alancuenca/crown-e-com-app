import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utilities/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../buttons/Button";
import './sign-up.scss';

const formFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUp = () => {
    const [ signUpFields, setSignUpFields ] = useState(formFields);
    const { displayName, email, password, confirmPassword } = signUpFields;

    const resetFormFields = () => {
        setSignUpFields(formFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        };

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password,
                displayName
            );

            await createUserDocFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            alert(error)
            console.log("Error signing up", error);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setSignUpFields({ ...signUpFields, [ name ]: value })
    };

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
