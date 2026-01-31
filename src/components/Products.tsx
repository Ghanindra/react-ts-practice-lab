import React, { useState } from 'react';
import { Product, Cart } from '../types/productList';
import ProductList from './ProductList';
import CartComponent from '../components/CartComponent';

const productsData: Product[] = [
  { id: 1, name: "Laptop", price: 75000, category: "Electronics", inStock: true },
  { id: 2, name: "Phone", price: 35000, category: "Electronics", inStock: true },
  { id: 3, name: "Headphones", price: 5000, category: "Electronics", inStock: false },
  { id: 4, name: "Sneakers", price: 8000, category: "Fashion", inStock: true },
  { id: 5, name: "Backpack", price: 2500, category: "Fashion", inStock: true },
  { id: 6, name: "Watch", price: 12000, category: "Fashion", inStock: false },
  { id: 7, name: "Coffee Mug", price: 500, category: "Home", inStock: true },
  { id: 8, name: "Notebook", price: 200, category: "Stationery", inStock: true },
  { id: 9, name: "Pen", price: 50, category: "Stationery", inStock: true },
  { id: 10, name: "Desk Lamp", price: 1500, category: "Home", inStock: false }
];

const Products = () => {
  const [cart, setCart] = useState<Cart[]>([]);

  // Add product to cart
  const add = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === product.id);
      if (existing) {
        return prev.map(item =>
          item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { productId: product.id, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  const handleDecreaseQuantity = (productId: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handleIncreaseQuantity = (productId: number) => {
    setCart(prev =>
      prev.map(item =>
        item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ flex: 2 }}>
        <ProductList products={productsData} add={add} />
      </div>
      <div style={{ flex: 1 }}>
        <CartComponent
          cart={cart}
          products={productsData}
          onRemove={handleRemoveFromCart}
          onDecrease={handleDecreaseQuantity}
          onIncrease={handleIncreaseQuantity}
        />
      </div>
    </div>
  );
};

export default Products;
