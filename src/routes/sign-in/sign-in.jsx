import {
  signInWithGooglePopup,
  createUserDocFromAuth
} from '../../utilities/firebase/firebase.js';

import SignUp from '../../components/sign-up-form/Sign-Up-Form.jsx';

const SignIn = () => {


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <p>Hello, I am Sign In Page!</p>
      <button onClick={logGoogleUser}>
        Sign In with Google
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn;
