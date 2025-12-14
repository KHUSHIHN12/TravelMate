function PreferenceForm({ onSubmit }) {
    return (
      <div className="card">
        <h2>Choose Your Travel Preferences</h2>
  
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
        <div className="checkbox-group">
          <label><input type="checkbox" /> Trekking</label>
          <label><input type="checkbox" /> Beach</label>
          <label><input type="checkbox" /> Culture</label>
          <label><input type="checkbox" /> Adventure</label>
        </div>
  
        <button onClick={onSubmit}>Get Recommendations</button>
      </div>
    );
  }
  
  export default PreferenceForm;
  