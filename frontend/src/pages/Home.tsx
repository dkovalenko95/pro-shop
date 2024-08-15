import ProductCard from '../components/ProductCard.tsx';
import { products } from '../../products-and-images/products.ts';

function Home() {
  return (
    <>
      <h1 className='text-center text-xl font-semibold mb-4'>Latest products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 xl:gap-7'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;