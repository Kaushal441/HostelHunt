import React from "react";
import "../styles/hostelCard.css"; // Ensure you have this CSS
import image1 from "../Images/h1.jpg"; // Default placeholder image

const HostelCard = ({ hostel, handleclickOfCard }) => {
  return (
    <div className="hostel-card" onClick={handleclickOfCard}>
      <div className="hostel-card-img">
        <img
          src={hostel.imageurl || image1} // Use placeholder if image is null
          alt={hostel.name}
          className="hostel-image"
        />
      </div>
      <div className="hostel-card-info">
        <h3 className="hostel-title">{hostel.name}</h3>
        <p>
          <strong>ID:</strong> {hostel.id}
        </p>
        <p>
          <strong>Location:</strong> {hostel.location}
        </p>
        <p>
          <strong>Capacity:</strong> {hostel.capacity} beds
        </p>
        <p>
          <strong>Rent:</strong> ₹{hostel.rent}
        </p>
        <p>
          <strong>Deposit:</strong> ₹{hostel.deposit}
        </p>
        <p>
          <strong>Owner:</strong> {hostel?.owner?.name || "N/A"}
        </p>
        <p>
          <strong>Owner Contact:</strong> {hostel?.owner?.contactInfo || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default HostelCard;

