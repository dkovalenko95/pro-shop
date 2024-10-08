import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Product as ProductType } from '../../products-and-images/products';
import Rating from './Rating';

type ProductProps = {
  children?: ReactNode;
  product: ProductType;
};

function ProductCard({ product } : ProductProps) {
  return (
    <div className='card card-compact bg-base-100 shadow-xl place-self-center max-w-[320px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[500px] h-full'>
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
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
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

export default ProductCard;
