import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHostels } from "../reduxSlices/hostelSlice"; // Import the thunk
import HostelCard from "../molecules/hostelCard"; // Assuming you have this component
import Header from "../atom/header";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Importing toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

export const HostelOwnerHomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { hostelData, loading, error } = useSelector((state) => state.Hostel);

  // State to manage form inputs and modal visibility
  const [showModal, setShowModal] = useState(false);
  const [hostelForm, setHostelForm] = useState({
    name: "",
    location: "",
    imageurl: "",
    capacity: "",
    rent: "",
    deposit: "",
  });

  useEffect(() => {
    dispatch(fetchHostels("/hostel")); // Fetch hostels from API
  }, [dispatch]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHostelForm({
      ...hostelForm,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const ownerData = {
      id: 1,
      name: "Gaurav",
      contactInfo: "9876543210",
      username: "gaurav123",
      password: "gaurav@123",
    };

    const newHostelData = {
      ...hostelForm,
      owner: ownerData,
    };

    try {
      const response = await fetch("http://localhost:8000/hostel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHostelData),
      });

      if (!response.ok) {
        throw new Error("Error adding hostel");
      }

      const data = await response.json();
      toast.success("Hostel added successfully!");
      setShowModal(false); // Close the modal on successful submission
      dispatch(fetchHostels("/hostel")); // Re-fetch hostels
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer /> {/* Toast notification container */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {hostelData?.map((hostel) => (
          <HostelCard key={hostel.id} hostel={hostel} />
        ))}
      </div> */}
      <button
        onClick={() => setShowModal(true)} // Open the modal
        style={{
          margin: "20px",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Hostel
      </button>
      {/* Modal for adding hostel */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2>Add New Hostel</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "10px" }}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={hostelForm.name}
                  onChange={handleInputChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={hostelForm.location}
                  onChange={handleInputChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Image URL</label>
                <input
                  type="text"
                  name="imageurl"
                  value={hostelForm.imageurl}
                  onChange={handleInputChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  value={hostelForm.capacity}
                  onChange={handleInputChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Rent</label>
                <input
                  type="number"
                  name="rent"
                  value={hostelForm.rent}
                  onChange={handleInputChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Deposit</label>
                <input
                  type="number"
                  name="deposit"
                  value={hostelForm.deposit}
                  onChange={handleInputChange}
                  required
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Add Hostel
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)} // Close the modal
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};