import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";

import './navigation.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { signOutUser } from "../../utilities/firebase/firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

const Routes = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

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
                            <span
                                className="link"
                                onClick={signOutUser}
                            >
                                Sign-Out
                            </span>
                        ) : (
                            <Link className="link" to="/auth">
                                Sign-In
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
};

export default Routes;
