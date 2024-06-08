import React, { useEffect } from 'react';
import { URL_PRODUCTS } from '../../Api/index';

interface Product {
  id: string; // assuming id is a string (UUID)
  title: string;
  price: number;
  description: string;
  category: string;
  image: {
    url: string;
    alt: string;
  };
}

const ProductData: React.FC = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(URL_PRODUCTS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched products:', data);
      } catch (error) {
        console.error('Unable to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  

  return (
    <div>
      <h1>Product Data</h1>
      <p>Check the console for the fetched product data.</p>
    </div>
  );
};

export default ProductData;





















