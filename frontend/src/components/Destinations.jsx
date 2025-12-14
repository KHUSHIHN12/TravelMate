import Navbar from "../components/Navbar";
import DestinationList from "../components/DestinationList";

function Destinations() {
  return (
    <>
      <Navbar />

      <div className="recommend-bg">

        {/* TOP: EXISTING DESTINATION CARDS */}
        <DestinationList />

        {/* BOTTOM: PREFERENCE FORM */}
        <div className="preference-section">
          <h2>Select Your Preferences</h2>

          <label>Climate</label>
          <select>
            <option>Cold</option>
            <option>Moderate</option>
            <option>Hot</option>
          </select>

          <label>Budget</label>
          <select>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <label>Duration</label>
          <select>
            <option>Weekend</option>
            <option>3–7 days</option>
            <option>Long stay</option>
          </select>

          <label>Activities</label>
          <select>
            <option>Trekking</option>
            <option>Beach</option>
            <option>Culture</option>
            <option>Adventure</option>
          </select>

          <button>Get Recommendations</button>
        </div>

      </div>
    </>
  );
}

export default Destinations;
