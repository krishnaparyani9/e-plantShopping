import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';
import './App.css';

function LandingPage() {
  const [showProducts, setShowProducts] = useState(false);

  if (showProducts) {
    return <ProductList />;
  }

  return (
    <>
      <section className="landing-page background-image">
        <div className="landing-container">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Discover the Beauty of Plants - Your One-Stop Shop for Indoor Garden</p>
          <button
            type="button"
            className="get-started-btn"
            onClick={() => setShowProducts(true)}
          >
            Get Started
          </button>
        </div>
      </section>
      <AboutUs />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
