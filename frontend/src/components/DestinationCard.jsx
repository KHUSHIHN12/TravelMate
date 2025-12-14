function DestinationCard({ place }) {
    return (
      <div className="destination-card">
        <h3>{place.name}</h3>
        <p>{place.description}</p>
        <span>{place.budget} Budget</span>
      </div>
    );
  }
  
  export default DestinationCard;
  