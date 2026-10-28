import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div>
      <section className="landing-page background-image">
        <div className="landing-container">
          <h1>🌿 Paradise Nursery</h1>
          <p>Discover the Beauty of Plants - Your One-Stop Shop for Indoor Garden</p>
          <Link to="/products" className="get-started-btn">Get Started</Link>
        </div>
      </section>
      <AboutUs />
    </div>
  );
}
