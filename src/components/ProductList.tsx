import React from 'react';
import { Product } from '../types/productList';
import ProductItem from './ProductItem';

interface Props {
  products: Product[];
  add: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, add }) => {
  return (
    <div>
      <h2>Product List</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(product => (
          <ProductItem key={product.id} product={product} add={add} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
