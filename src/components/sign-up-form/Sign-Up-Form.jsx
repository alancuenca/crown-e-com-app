import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utilities/firebase/firebase";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import FormInput from "../form-input/form-input";
import Button from "../buttons/Button";
import './sign-up.scss';

const emptyFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUp = () => {
    const { setCurrentUser } = useContext(UserContext);
    const [ signUpFields, setSignUpFields ] = useState(emptyFormFields);
    const { displayName, email, password, confirmPassword } = signUpFields;

    const resetFormFields = () => {
        setSignUpFields(emptyFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        };

        try {
            const user = await createAuthUserWithEmailAndPassword(
                email,
                password,
                displayName
            );

            await createUserDocFromAuth(user, { displayName });

            setCurrentUser(user);

            resetFormFields();
        } catch (error) {
            alert("Error signing up", error)
            console.log(error);
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
