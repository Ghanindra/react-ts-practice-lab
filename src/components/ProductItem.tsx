import React from 'react';
import { Product } from '../types/productList';

interface Props {
  product: Product;
  add: (product: Product) => void;
}

const ProductItem: React.FC<Props> = ({ product, add }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "0.5rem", margin: "0.5rem" }}>
      <h4>{product.name}</h4>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      <button 
        onClick={() => add(product)} 
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
