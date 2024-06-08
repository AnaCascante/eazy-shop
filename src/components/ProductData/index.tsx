// src/components/ProductData.tsx
import React, { useEffect, useState } from 'react';
import { URL_PRODUCTS } from '../../Api';
import ProductCard from '../ProductCard';

interface Product {
  id: string;
  title: string;
  price: number;
  image: {
    url: string;
    alt: string;
  };
}

const ProductData: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(URL_PRODUCTS);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched products:', data);
        setProducts(data.results);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Product Data</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductData;
