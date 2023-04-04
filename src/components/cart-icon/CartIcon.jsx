import { useContext } from 'react';
import { ReactComponent as BagIcon } from '../../assets/shopping-bag.svg';
import './cartIcon.scss';
import { CartContext } from '../../Context/DropDownContext';

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
          <BagIcon className='shopping-icon'/>
          <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon ;
