import React, { useState } from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/india.jpg";
import "../styles/recommendation.css";

function Destinations() {
  const [wishlist, setWishlist] = useState([]); // Track wishlist
  const [recommendations, setRecommendations] = useState([]); // Recommended destinations

  // Full destination objects (demo)
  const allDestinations = [
    {
      name: "Goa",
      image: "https://example.com/goa.jpg",
      description: "Famous for beaches, nightlife and Portuguese culture.",
    },
    {
      name: "Manali",
      image: "https://example.com/manali.jpg",
      description: "A scenic hill station with snow and adventure sports.",
    },
    {
      name: "Jaipur",
      image: "https://example.com/jaipur.jpg",
      description: "The Pink City known for forts and royal heritage.",
    },
    {
      name: "Kerala",
      image: "https://example.com/kerala.jpg",
      description: "God’s Own Country with backwaters and greenery.",
    },
    {
      name: "Ladakh",
      image: "https://example.com/ladakh.jpg",
      description: "High altitude desert with stunning landscapes.",
    },
  ];

  // State to track form selections
  const [formValues, setFormValues] = useState({
    climate: "",
    budget: "",
    duration: "",
    activities: "",
  });

  // Update form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Generate recommendations only after button click
  const getRecommendations = () => {
    // For demo: we just shuffle allDestinations
    // Later: filter based on formValues
    const shuffled = [...allDestinations].sort(() => 0.5 - Math.random());
    setRecommendations(shuffled.slice(0, 3));
  };

  // Add to wishlist
  const addToWishlist = (place) => {
    if (!wishlist.find((item) => item.name === place.name)) {
      setWishlist([...wishlist, place]);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (place) => {
    setWishlist(wishlist.filter((item) => item.name !== place.name));
  };

  return (
    <div
      className="recommend-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="recommend-overlay"></div>
      <Navbar />

      <div className="recommend-content">
        {/* Sidebar */}
        <aside className="sidebar-glass">
          <div className="sidebar-section">
            <h3>Welcome, Guest</h3>
            <p className="muted-text">Sign in to save your Wanderlist</p>
          </div>

          {/* Wishlist */}
          <div className="sidebar-section">
            <h4>⭐ Wanderlist</h4>
            {wishlist.length === 0 ? (
              <p className="empty-text">No destinations saved yet</p>
            ) : (
              <ul>
                {wishlist.map((item, index) => (
                  <li key={index} className="wishlist-item">
                    <span>{item.name}</span>
                    <button
                      className="wishlist-remove-btn"
                      onClick={() => removeFromWishlist(item)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="sidebar-section">
            <h4>💡 Travel Tips</h4>
            <ul className="tips">
              <li>Best season matters more than price</li>
              <li>Keep buffer in your budget</li>
              <li>3–7 days works best</li>
              <li>Check weather before booking</li>
            </ul>
          </div>
        </aside>

        {/* Form & Recommendations */}
        <section className="form-glass form-animate">
          <h2>Plan Your Perfect Trip</h2>
          <p className="form-subtitle">
            Tell us your preferences and we’ll suggest destinations you’ll love
          </p>

          {/* Form */}
          <div className="form-group">
            <label>Climate</label>
            <select
              name="climate"
              value={formValues.climate}
              onChange={handleChange}
            >
              <option value="">Select Climate</option>
              <option>🌿 Monsoon Escape</option>
              <option>🌤️ Mild & Pleasant</option>
              <option>☀️ Warm & Sunny</option>
              <option>❄️ Cool & Mountain</option>
            </select>
          </div>

          <div className="form-group">
            <label>Budget</label>
            <select
              name="budget"
              value={formValues.budget}
              onChange={handleChange}
            >
              <option value="">Select Budget</option>
              <option>💸 Budget-Friendly</option>
              <option>💼 Comfortable</option>
              <option>✨ Premium</option>
            </select>
          </div>

          <div className="form-group">
            <label>Duration</label>
            <select
              name="duration"
              value={formValues.duration}
              onChange={handleChange}
            >
              <option value="">Select Duration</option>
              <option>Weekend</option>
              <option>3–7 days</option>
              <option>Long stay</option>
            </select>
          </div>

          <div className="form-group">
            <label>Activities</label>
            <select
              name="activities"
              value={formValues.activities}
              onChange={handleChange}
            >
              <option value="">Select Activity</option>
              <option>Beach</option>
              <option>Trekking</option>
              <option>Adventure</option>
              <option>Culture</option>
            </select>
          </div>

          <button className="recommend-btn" onClick={getRecommendations}>
            Get Recommendations
          </button>

          {/* Only show recommendations after button click */}
          {recommendations.length > 0 && (
            <div className="recommendations-section">
              <h3>Recommended Destinations:</h3>
              {recommendations.map((place) => (
                <div key={place.name} className="destination-card">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="dest-image"
                  />
                  <h4>{place.name}</h4>
                  <p>{place.description}</p>
                  <button
                    className="recommend-btn"
                    onClick={() => addToWishlist(place)}
                    disabled={wishlist.find((item) => item.name === place.name)}
                  >
                    {wishlist.find((item) => item.name === place.name)
                      ? "Added to Wanderlist"
                      : "Add to Wanderlist"}
                  </button>
                </div>
              ))}
            </div>
          )}

          <p className="form-footer">
            ✨ Save your favorite destinations to your Wanderlist
          </p>
        </section>
      </div>
    </div>
  );
}

export default Destinations;
