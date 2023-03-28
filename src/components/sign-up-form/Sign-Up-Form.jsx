import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utilities/firebase/firebase";

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
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setSignUpFields({ ...signUpFields, [ name ]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        };
        
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
            resetFormFields();

        } catch (error) {
            alert(error)
            console.log("Error signing up", error);
        }
    };

    return (
        <div>
            <h1>Sign up with an email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                    />

                <label>Email</label>
                <input
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                    />

                <label>Password</label>
                <input
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                    />

                <label>Confirm Password</label>
                <input
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
