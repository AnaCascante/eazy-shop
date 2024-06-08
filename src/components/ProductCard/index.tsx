import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => { 
    return (
        <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {product.discount && <p>Discount: {product.discount}%</p>}
      <Link to={`/product/${product.id}`}>View Product</Link>
    </div>
       
    );
}


export default ProductCard;
/* this is some idea for styling the product card -- you can use this as a reference
<div className="flex flex-col items-center justify-center p-4">
<div className="w-64 h-64 bg-gray-200 rounded-lg"></div>
<div className="flex flex-col items-center justify-center p-4">
    <h2 className="text-lg font-bold">Product Name</h2>
    <p className="text-sm text-gray-500">Product Description</p>
    <p className="text-lg font-bold text-pink-500">$9.99</p> 
    <Link to="/CheckoutPage" className="bg-pink-500 text-white p-2 rounded-lg mt-4">Add to Cart</Link>
</div>
</div> */