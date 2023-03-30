

import SignIn from '../../components/sign-in/Sign-In-Form.jsx';
import SignUp from '../../components/sign-up-form/Sign-Up-Form';
import './authentication.scss';

const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
