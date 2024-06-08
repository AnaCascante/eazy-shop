// ProductCard.tsx
import React from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="w-full h-auto" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;

