import { Link, useParams } from 'react-router-dom';
import { products } from '../../products-and-images/products';
import Rating from '../components/Rating';

function SingleProduct() {
  const { id: productId } = useParams();
  const product = products.find((prod) => prod._id === productId);

  return (
    <div className='max-w-[1440px] my-0 mx-auto'>
      <Link to='/'>
        <button className='btn btn-ghost'>Go back</button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-[4.5fr_4fr_3.5fr] gap-4 mt-4 max-w-[360px] sm:max-w-[480px] md:max-w-full place-content-center my-0 mx-auto'>
        <img src={product?.image} alt='Product image' />
        <div className='flex flex-col items-start justify-center'>
          <h2 className='text-xl font-semibold mb-2'>{product?.name}</h2>
          <h3 className='font-medium'>Brand: {product?.brand}</h3>
          <div className='divider my-2'></div>
          <Rating value={Number(product?.rating)} text={`${product?.numReviews} reviews`} />
          <div className='divider my-2'></div>
          <h3 className='font-medium'>Price: {product?.price}</h3>
          <div className='divider my-2'></div>
          <p>{product?.description}</p>
        </div>
        <div className='p-4 h-fit border border-slate-200 rounded-md shadow-md'>
          <div className='flex items-center justify-between'>
            <h4 className='font-medium'>Price:</h4>
            <h4 className='text-lg font-semibold'>{product?.price}</h4>
          </div>
          <div className='divider my-2'></div>
          <div className='flex items-center justify-between'>
            <h4 className='font-medium'>Status:</h4>
            <h4 className='text-base font-semibold'>
              {Number(product?.countInStock) > 0
                ? <span className='p-1 rounded-md bg-emerald-100 text-emerald-500'>In stock</span>
                : <span className='p-1 rounded-md bg-red-100 text-red-500'>Out of stock</span>
              }
            </h4>
          </div>
          <div className='divider my-2'></div>
          <div>
            <button className={`btn ${Number(product?.countInStock) > 0 ? 'btn-primary' : 'btn-disabled'}`}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
