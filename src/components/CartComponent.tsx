import React from 'react';
import { Product, Cart } from '../types/productList';

interface Props {
  cart: Cart[];
  products: Product[];
  onRemove: (productId: number) => void;
  onDecrease: (productId: number) => void;
  onIncrease: (productId: number) => void;
}

const CartComponent: React.FC<Props> = ({ cart, products, onRemove, onDecrease, onIncrease }) => {
  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  return (
    <div style={{ border: "1px solid black", padding: "1rem", marginTop: "1rem" }}>
      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return null;

        return (
          <div key={item.productId} style={{ marginBottom: "1rem" }}>
            <h4>{product.name}</h4>
            <p>Price: ₹{product.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => onDecrease(item.productId)}>-</button>
            <button onClick={() => onIncrease(item.productId)}>+</button>
            <button onClick={() => onRemove(item.productId)}>Remove</button>
          </div>
        );
      })}
      {cart.length > 0 && <h3>Total: ₹{total}</h3>}
    </div>
  );
};

export default CartComponent;
