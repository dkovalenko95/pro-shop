import Product from '../components/Product.tsx';
import { products } from '../../products-and-images/products.ts';

function Home() {
  return (
    <>
      <h1>Latest products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;