import React, { useState } from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/india.jpg";
import "../styles/recommendation.css";
import axios from "axios";


function Destinations() {
  const [wishlist, setWishlist] = useState([]); // Track wishlist
  const [recommendations, setRecommendations] = useState([]); // Recommended destinations
  const [analysis, setAnalysis] = useState(null);

  // Full destination objects (demo)
  

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
  //import axios from "axios";

const getRecommendations = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/recommend",
      {
        climate: formValues.climate,
        budget: Number(formValues.budget),
        duration: Number(formValues.duration),
        activity: formValues.activities,
      }
    );

    setRecommendations([response.data.bestDestination]);
    setAnalysis(response.data.analysis);

  } catch (error) {
    console.error("Error:", error);
  }
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
            <select name="climate" value={formValues.climate} onChange={handleChange}>
  <option value="">Select Climate</option>
  <option value="Monsoon">Monsoon Escape</option>
  <option value="Moderate">Mild & Pleasant</option>
  <option value="Warm">Warm & Sunny</option>
  <option value="Cold">Cool & Mountain</option>
</select>
</div>

          <div className="form-group">
            <label>Budget</label>
            <select name="budget" value={formValues.budget} onChange={handleChange}>
  <option value="">Select Budget</option>
  <option value="6000">Budget-Friendly</option>
  <option value="12000">Comfortable</option>
  <option value="20000">Premium</option>
</select>
          </div>

          <div className="form-group">
            <label>Duration</label>
            <select name="duration" value={formValues.duration} onChange={handleChange}>
  <option value="">Select Duration</option>
  <option value="2">Weekend</option>
  <option value="5">3–7 days</option>
  <option value="10">Long stay</option>
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
              
         {/* Recommended Destination */}
         {recommendations.length > 0 && (
  <div className="recommendations-section">
    <h3>Recommended Destination:</h3>

    {recommendations.map((place) => (
      <div key={place._id} className="destination-card">

        <img
          src={place.image || "https://via.placeholder.com/600x350"}
          alt={place.name}
          className="dest-image"
        />

        <h2 className="dest-name">{place.name}</h2>

        <p className="dest-description">{place.description}</p>

        <button
          className="recommend-btn"
          onClick={() => addToWishlist(place)}
        >
          Add to Wanderlist
        </button>

      </div>
    ))}
  </div>
)}

 
  
          {/* Optimization Report */}
          {analysis && (
            <div className="optimization-report">
              <h3>Trip Optimization Report</h3>
              <p>💰 Budget Impact: {analysis.budget}%</p>
              <p>⏳ Duration Impact: {analysis.duration}%</p>
              <p>🌤 Climate Impact: {analysis.climate}%</p>
              <p>🎯 Activity Impact: {analysis.activity}%</p>
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
