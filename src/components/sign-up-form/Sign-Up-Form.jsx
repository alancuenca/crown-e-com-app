import { useState } from "react";

const formFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUp = () => {
    const [ signUpFields, setSignUpFields ] = useState(formFields);
    const { displayName, email, password, confirmPassword } = signUpFields;

  return (
    <div>
          <h1>Sign up with an email and password</h1>
          <form onSubmit={() => {}}>
              <label>Display Name</label>
              <input type="text" required />

              <label>Email</label>
              <input type="email" required />

              <label>Password</label>
              <input type="password" required />

              <label>Confirm Password</label>
              <input type="password" required />
              <button type="submit">Sign Up</button>
          </form>
    </div>
  );
};

export default SignUp ;
