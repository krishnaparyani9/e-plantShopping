import './AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-us-container">
        <h2>About Paradise Nursery</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Welcome to Paradise Nursery</h3>
            <p>
              Paradise Nursery is your ultimate destination for premium quality plants and gardening accessories. 
              With over 20 years of experience in horticulture, we are dedicated to bringing the beauty of nature into your homes and offices.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              Our mission is to make gardening accessible and enjoyable for everyone, from beginners to experienced plant enthusiasts. 
              We provide carefully curated houseplants, succulents, flowering plants, and herbs that are healthy, vibrant, and perfect for any space.
            </p>
            
            <h3>Why Choose Us?</h3>
            <ul className="features-list">
              <li>✓ High-quality, healthy plants sourced from trusted growers</li>
              <li>✓ Expert gardening advice and care tips</li>
              <li>✓ Fast and reliable shipping with proper plant packaging</li>
              <li>✓ Competitive prices with seasonal discounts</li>
              <li>✓ 100% satisfaction guarantee on all plants</li>
              <li>✓ Wide variety of plants for all skill levels</li>
            </ul>
            
            <h3>Our Values</h3>
            <p>
              We believe in sustainability, quality, and customer satisfaction. Every plant is carefully inspected 
              before shipping to ensure it arrives in perfect condition. We also provide ongoing support to help you care for your plants.
            </p>
          </div>
          
          <div className="about-contact">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p><strong>Email:</strong> info@paradisenursery.com</p>
              <p><strong>Phone:</strong> 1-800-PLANTS-1</p>
              <p><strong>Address:</strong> 123 Garden Lane, Botanical City, BC 12345</p>
              <p><strong>Hours:</strong> Mon-Fri 9AM-6PM, Sat 10AM-4PM, Sun Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
