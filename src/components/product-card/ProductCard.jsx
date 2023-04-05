import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

import './product-card.scss';
import Button from '../buttons/Button';

const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`shop good ${name} ${price}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button
                buttonType='inverted-button'
                onClick={addProductToCart}
            >
                Add to Cart
            </Button>
        </div>
    );
};

export default ProductCard;
