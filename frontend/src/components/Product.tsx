import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Product as ProductType } from '../../products-and-images/products';

type PropsType = {
  children?: ReactNode;
  product: ProductType;
};

function Product({ product } : PropsType) {
  return (
    <div className='card card-compact bg-base-100 shadow-xl'>
      <figure>
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt='Product' />
        </Link>
      </figure>
      <div className='card-body'>
        <a href={`/product/${product._id}`}>
          <h2 className='card-title'>{product.name}</h2>
        </a>
        <h2 className='card-title'>{product.price}</h2>
        <p>{product.description}</p>
        <div className='card-actions justify-end'>
          <Link to={`/product/${product._id}`}>
            <button className='btn btn-primary'>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
