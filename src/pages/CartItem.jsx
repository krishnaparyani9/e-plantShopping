import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/CartSlice';
import './CartItem.css';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleIncreaseQuantity = (item) => {
    dispatch(cartActions.updateQuantity({
      id: item.id,
      quantity: item.quantity + 1,
    }));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(cartActions.updateQuantity({
      id: item.id,
      quantity: item.quantity - 1,
    }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(cartActions.removeItem(productId));
  };

  const handleCheckout = () => {
    alert('Checkout Coming Soon! ✨');
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-message">Your cart is empty!</p>
            <Link to="/products" className="continue-shopping-btn">
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-content">
              <div className="cart-items">
                <h2 className="items-title">Cart Items ({totalQuantity})</h2>
                
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">{item.image}</div>
                    
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-price">Unit Price: ${item.price.toFixed(2)}</p>
                    </div>

                    <div className="item-quantity">
                      <button
                        className="qty-btn minus"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        −
                      </button>
                      <span className="qty-display">{item.quantity}</span>
                      <button
                        className="qty-btn plus"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>
                    </div>

                    <div className="item-total">
                      <p className="total-label">Total:</p>
                      <p className="total-price">${item.totalPrice.toFixed(2)}</p>
                    </div>

                    <button
                      className="delete-btn"
                      onClick={() => handleRemoveItem(item.id)}
                      title="Remove from cart"
                    >
                      🗑
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h2 className="summary-title">Order Summary</h2>
                
                <div className="summary-item">
                  <span>Total Items:</span>
                  <span>{totalQuantity}</span>
                </div>

                <div className="summary-item">
                  <span>Subtotal:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>

                <div className="summary-item shipping">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>

                <div className="summary-total">
                  <span>Grand Total:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>

                <button className="checkout-btn" onClick={handleCheckout}>
                  Coming Soon
                </button>

                <Link to="/products" className="continue-shopping-link">
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
