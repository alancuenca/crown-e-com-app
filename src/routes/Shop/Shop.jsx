import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import ProductCard from '../../components/product-card/ProductCard';
import './Shop.scss';

const Shop = () => {

  const { products } = useContext(ProductContext);

  return (
    <div className='product-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
