import { Outlet, Link } from "react-router-dom";

const Routes = () => {
    return (
        <>
            <div className="navigation">
                <Link to="/">
                <div className="logo">Logo</div>
                </Link>
                <div className="links-container">
                    <Link className="link" to="/shop">
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Routes;
