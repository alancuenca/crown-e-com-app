import SignIn from '../../components/sign-in/Sign-In-Form.jsx';
import SignUp from '../../components/sign-up-form/Sign-Up-Form';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext.jsx';
import './authentication.scss';

const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <h2>
        {currentUser
          ?
          <div>
            Welcome to Crown, {currentUser.displayName}
          </div>
          :
          <div className='authentication-container'>
          <h1 className='welcome-user'>
            Welcome to Crown. Please Sign In
          </h1>
            <SignIn />
            <SignUp />
          </div>
        }
      </h2>
    </>
  );
};

export default Authentication;
