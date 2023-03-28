import { signInWithGooglePopup, createUserDocFromAuth } from '../../utilities/firebase/firebase.js'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  }

  return (
    <div>
      <p>Hello, I am Sign In Page!</p>
      <button onClick={logGoogleUser}>
        Sign In with Google
      </button>
    </div>
  );
};

export default SignIn;
