import DestinationCard from "./DestinationCard";

function DestinationList({ results }) {
  if (!results.length) return <p>No recommendations yet.</p>;

  return (
    <div className="results-container">
      <h2>Recommended Destinations</h2>
      <div className="grid">
        {results.map((dest, idx) => (
          <DestinationCard key={idx} dest={dest} />
        ))}
      </div>
    </div>
  );
}

export default DestinationList;
