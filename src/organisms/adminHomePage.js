import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../atom/header"; // Assuming you have your Header component

// Example admin hostels data (replace with API integration)
const initialHostels = [
  {
    id: 1,
    name: "Elite Hostel",
    location: "Downtown",
    capacity: 50,
    rent: 500,
    deposit: 100,
    owner: "John Doe",
    picture: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    id: 2,
    name: "Sunrise Hostel",
    location: "Eastside",
    capacity: 35,
    rent: 450,
    deposit: 80,
    owner: "Jane Smith",
    picture: "https://via.placeholder.com/300x200", // Placeholder image
  },
];

const AdminHomePage = () => {
  const [hostels, setHostels] = useState(initialHostels); // Existing hostels list
  const [newHostel, setNewHostel] = useState({
    name: "",
    location: "",
    capacity: 0,
    rent: 0,
    deposit: 0,
    owner: "",
    picture: null, // For storing image data
  });

  const [formVisibility, setFormVisibility] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHostel({
      ...newHostel,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setNewHostel({
      ...newHostel,
      picture: URL.createObjectURL(e.target.files[0]), // Preview image
    });
  };

  const handleAddHostel = (e) => {
    e.preventDefault();
    const { name, location, capacity, rent, deposit, owner, picture } =
      newHostel;
    if (name && location && capacity > 0 && rent > 0 && deposit > 0 && owner) {
      setHostels([...hostels, { id: hostels.length + 1, ...newHostel }]);
      setNewHostel({
        name: "",
        location: "",
        capacity: 0,
        rent: 0,
        deposit: 0,
        owner: "",
        picture: null,
      });
      toast.success("New Hostel Added!");
      setFormVisibility(false);
    } else {
      toast.error("Please fill out all fields!");
    }
  };

  // Styles
  const adminPageStyles = {
    padding: "60px 20px",
    backgroundColor: "#f4f6f9",
    fontFamily: "'Roboto', sans-serif",
  };

  const formContainerStyles = {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "40px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    opacity: formVisibility ? 1 : 0,
    visibility: formVisibility ? "visible" : "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease",
  };

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    visibility: formVisibility ? "visible" : "hidden",
    opacity: formVisibility ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  const inputFieldStyles = {
    width: "100%",
    padding: "14px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1rem",
    color: "#333",
    transition: "border-color 0.3s ease-in-out",
  };

  const submitButtonStyles = {
    padding: "12px 30px",
    backgroundColor: "#6c63ff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
  };

  const hostelCardStyles = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    width: "300px",
    display: "inline-block",
    textAlign: "center",
    marginBottom: "30px",
    cursor: "pointer",
    overflow: "hidden",
  };

  const hostelCardHoverStyles = {
    transform: "scale(1.05)",
  };

  const imagePreviewStyles = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "20px",
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <div style={adminPageStyles}>
        {/* Button to Toggle Add Hostel Form */}
        <button
          onClick={() => setFormVisibility(!formVisibility)}
          style={{
            ...submitButtonStyles,
            position: "absolute",
            right: "20px",
            top: "110px",
            width: "200px",
          }}
        >
          Add New Hostel
        </button>

        {/* Overlay when form is visible */}
        <div
          style={overlayStyles}
          onClick={() => setFormVisibility(false)}
        ></div>

        {/* Modal-like Add Hostel Form */}
        <div style={formContainerStyles}>
          <form onSubmit={handleAddHostel}>
            <label htmlFor="name">Hostel Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Hostel Name"
              value={newHostel.name}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              value={newHostel.location}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />
            <label htmlFor="capacity">Capacity</label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              placeholder="Capacity"
              value={newHostel.capacity}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />
            <label htmlFor="rent">Rent</label>
            <input
              type="number"
              id="rent"
              name="rent"
              placeholder="Rent"
              value={newHostel.rent}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />
            <label htmlFor="deposit">Deposit</label>
            <input
              type="number"
              id="deposit"
              name="deposit"
              placeholder="Deposit"
              value={newHostel.deposit}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />
            <label htmlFor="owner">Owner</label>
            <input
              type="text"
              id="owner"
              name="owner"
              placeholder="Owner"
              value={newHostel.owner}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />
            <label htmlFor="picture">Hostel Picture</label>
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              onChange={handleImageChange}
              style={inputFieldStyles}
            />
            {newHostel.picture && (
              <img
                src={newHostel.picture}
                alt="Hostel Preview"
                style={imagePreviewStyles}
              />
            )}
            <button type="submit" style={submitButtonStyles}>
              Add Hostel
            </button>
          </form>
        </div>

        {/* List of Hostels as Horizontal Cards */}
        <h2 style={{ textAlign: "center", margin: "40px 0" }}>
          Existing Hostels
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {hostels.map((hostel) => (
            <div
              key={hostel.id}
              style={{ ...hostelCardStyles, ":hover": hostelCardHoverStyles }}
            >
              <img
                src={hostel.picture}
                alt={hostel.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3>{hostel.name}</h3>
              <p>
                <strong>Location:</strong> {hostel.location}
              </p>
              <p>
                <strong>Capacity:</strong> {hostel.capacity}
              </p>
              <p>
                <strong>Rent:</strong> ${hostel.rent}
              </p>
              <p>
                <strong>Deposit:</strong> ${hostel.deposit}
              </p>
              <p>
                <strong>Owner:</strong> {hostel.owner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
