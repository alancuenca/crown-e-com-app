import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import './navigation.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { signOutUser } from "../../utilities/firebase/firebase";

const Routes = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    };

    return (
        <>
            <div className="navigation">
                <Link to="/">
                    <div className="logo-container">
                        <CrownLogo />
                    </div>
                </Link>
                <div className="links-container">
                    <Link className="link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="link"
                                onClick={signOutHandler}
                            >
                                Sign-Out
                            </span>
                        ) : (
                            <Link className="link" to="/auth">
                                Sign-In
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Routes;
