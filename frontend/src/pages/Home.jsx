import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div
        className="home-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="home-overlay">
          <h1>Travel Destination Recommendation System</h1>
          <p>
            Discover the best travel destinations based on your preferences,
            budget, and travel duration.
          </p>
          <button onClick={() => navigate("/destinations")}>
            Get Destination
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
