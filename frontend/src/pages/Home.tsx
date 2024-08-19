import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard.tsx';
import { ProductsSet } from '../../products-and-images/products.ts';

function Home() {
  const [products, setProducts] = useState<ProductsSet | null>(null);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios fetching products error:', error);
        } else {
          console.error('Error fetching products:', error);
        };
      };
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1 className='text-center text-xl font-semibold mb-4'>Latest products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 xl:gap-7'>
        {products?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;