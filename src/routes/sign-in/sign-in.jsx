import {
  signInWithGooglePopup,
  createUserDocFromAuth
} from '../../utilities/firebase/firebase.js';

import SignUp from '../../components/sign-up-form/Sign-Up-Form.jsx';
import Button from '../../components/buttons/Button'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <p>Hello, I am Sign In Page!</p>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign In with Google
      </Button>
      <SignUp />
    </div>
  );
};

export default SignIn;
