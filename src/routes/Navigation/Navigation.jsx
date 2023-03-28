import { Outlet, Link } from "react-router-dom";
import './navigation.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

const Routes = () => {
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
                    <Link className="link" to="/signIn">
                        Sign-In
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Routes;
