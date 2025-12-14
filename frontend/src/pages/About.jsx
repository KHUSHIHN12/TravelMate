import Navbar from "../components/Navbar";
import "../styles/login_about.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ padding: "40px 20px", color: "#333" }}>
        <h2>About This App</h2>
        <p>
          Welcome to the Travel Recommendation System! This platform helps users
          discover destinations tailored to their preferences, making trip
          planning easier and more enjoyable.
        </p>

        <h3>Features:</h3>
        <ul>
          <li>Personalized destination recommendations based on climate, budget, duration, and activities.</li>
          <li>Add your favorite destinations to a “Wanderlist” for easy access and planning.</li>
          <li>Interactive and visually appealing interface with beautiful destination images.</li>
          <li>Helpful travel tips to ensure smooth and memorable trips.</li>
        </ul>

        <h3>Why Use This Website?</h3>
        <p>
          Planning a trip can be overwhelming, with so many destinations and factors to consider.
          Our system simplifies this by recommending places that match your interests and budget.
          Whether you're looking for a relaxing beach vacation, a cultural city tour, or an adventurous trekking trip,
          this app helps you find your perfect getaway.
        </p>

        <h3>Get Started:</h3>
        <p>
          Use the “Plan Your Perfect Trip” form to select your preferences and explore recommended destinations.
          Save the ones you like to your Wanderlist and plan your next adventure with ease!
        </p>
      </div>
    </>
  );
}

export default About;
