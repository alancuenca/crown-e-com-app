import Button from '../buttons/Button';
import './cart-dropdown.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button>Go to Check Out</Button>
        </div>
    );
};

export default CartDropdown;
