import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { cartActions } from '../store/CartSlice';
import './CartItem.css';

export default function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.cost,
    0
  );

  const handleIncrement = (item) => {
    dispatch(cartActions.updateQuantity({
      id: item.id,
      quantity: item.quantity + 1,
    }));
  };

  const handleDecrement = (item) => {
    dispatch(cartActions.updateQuantity({
      id: item.id,
      quantity: item.quantity - 1,
    }));
  };

  const handleRemove = (item) => {
    dispatch(cartActions.removeItem(item.name));
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Checkout Coming Soon! ✨');
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="cart-container">
          <h1 className="cart-title">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p className="empty-message">Your cart is empty!</p>
              <button
                type="button"
                className="get-started-button"
                onClick={handleContinueShopping}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              <h2 className="items-title">Cart Items ({totalQuantity})</h2>

              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">{item.image}</div>

                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">Unit Price: ${item.cost.toFixed(2)}</p>
                  </div>

                  <div className="item-quantity">
                    <button
                      className="qty-btn minus"
                      onClick={() => handleDecrement(item)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button
                      className="qty-btn plus"
                      onClick={() => handleIncrement(item)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <div className="item-total">
                    <p className="total-label">Total:</p>
                    <p className="total-price">
                      ${(item.quantity * item.cost).toFixed(2)}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => handleRemove(item)}
                    title="Remove from cart"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Delete
                  </button>
                </div>
              ))}

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

                <button
                  type="button"
                  className="get-started-button"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
