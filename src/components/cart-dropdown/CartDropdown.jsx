import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Button from '../buttons/Button';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        cartItem={item}
                    />
                ))}
            </div>
            <Button>Go to Check Out</Button>
        </div>
    );
};

export default CartDropdown;
