import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => { 
    if (!product) {
        return null;
    }   
    return (
        <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {product.discount && <p>Discount: {product.discount}%</p>}
      <Link to={`/product/${product.id}`}>View Product</Link>
    </div>
       
    );
};


export default ProductCard;
