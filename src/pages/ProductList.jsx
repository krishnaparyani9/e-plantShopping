import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/CartSlice';
import './ProductList.css';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = {
    'Succulents': [
      { id: 1, name: 'Jade Plant', price: 12.99, image: '🌱' },
      { id: 2, name: 'Aloe Vera', price: 9.99, image: '🌿' },
      { id: 3, name: 'Echeveria', price: 8.99, image: '🪴' },
      { id: 4, name: 'Sedum', price: 7.99, image: '🌱' },
      { id: 5, name: 'Cactus Mix', price: 10.99, image: '🌵' },
      { id: 6, name: 'Haworthia', price: 11.99, image: '🪴' },
    ],
    'Flowering Plants': [
      { id: 7, name: 'Orchid', price: 19.99, image: '🌸' },
      { id: 8, name: 'Rose', price: 15.99, image: '🌹' },
      { id: 9, name: 'Lavender', price: 13.99, image: '💜' },
      { id: 10, name: 'Petunia', price: 12.99, image: '🌼' },
      { id: 11, name: 'Dahlia', price: 16.99, image: '🌺' },
      { id: 12, name: 'Tulip', price: 14.99, image: '🌷' },
    ],
    'Foliage Plants': [
      { id: 13, name: 'Monstera', price: 24.99, image: '🍃' },
      { id: 14, name: 'Pothos', price: 11.99, image: '🌿' },
      { id: 15, name: 'Philodendron', price: 18.99, image: '🍂' },
      { id: 16, name: 'Snake Plant', price: 14.99, image: '🌾' },
      { id: 17, name: 'Spider Plant', price: 9.99, image: '🌱' },
      { id: 18, name: 'Fern', price: 13.99, image: '🌿' },
    ],
    'Herb Plants': [
      { id: 19, name: 'Basil', price: 6.99, image: '🌿' },
      { id: 20, name: 'Rosemary', price: 7.99, image: '🌱' },
      { id: 21, name: 'Mint', price: 5.99, image: '🍃' },
      { id: 22, name: 'Thyme', price: 6.49, image: '🌿' },
      { id: 23, name: 'Oregano', price: 6.49, image: '🌾' },
      { id: 24, name: 'Cilantro', price: 5.49, image: '🌱' },
    ],
  };

  const handleAddToCart = (product) => {
    dispatch(cartActions.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
    setAddedItems(new Set(addedItems).add(product.id));
  };

  const isItemAdded = (productId) => addedItems.has(productId);

  return (
    <div className="product-list-page">
      <h1 className="page-title">Our Plants Collection</h1>
      
      {Object.entries(products).map(([category, categoryProducts]) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {categoryProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button
                  className={`add-to-cart-btn ${isItemAdded(product.id) ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={isItemAdded(product.id)}
                >
                  {isItemAdded(product.id) ? '✓ Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
