import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHostels } from "../reduxSlices/hostelSlice"; // Import the thunk
import HostelCard from "../molecules/hostelCard"; // Assuming you have this component
import Header from "../atom/header";
import { useRazorpay } from "react-razorpay";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Importing toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Razorpay = useRazorpay(); // Razorpay instance

  // Select hostel data from Redux store
  const { hostelData, loading, error } = useSelector((state) => state.Hostel);

  useEffect(() => {
    dispatch(fetchHostels("/hostel")); // Fetch hostels from API
  }, [dispatch]);

  // Handle booking/payment when clicking a hostel card
 

  const handleclickOfCard = (item) => {
    console.log("Card clicked!", item);

    var options = {
      key: "rzp_test_KfkSVTMrjRudas",
      key_secret: "WkTAxsYbM61XV2zLioGlRphd",
      currency: "INR",
      amount: item.rent,
      name: item.name,
      description: item.owner,
      handler: function (response) {
        toast("Your Hostel booking is Confirmed");
        navigate("/home");
      },
      prefill: {
        name: "HotelHunt",
        email: "kaushalsharma@gmail.com",
        contact: "8329821835",
      },
      notes: {
        address: "IACSD CDAC pune, Maharastra",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    const resp = pay.open();
    console.log(resp);
  };

  return (
    <div>
      <Header />
      <ToastContainer /> {/* Toast notification container */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {hostelData?.map((hostel) => (
          <HostelCard
            key={hostel.id}
            hostel={hostel}
            handleclickOfCard={() => handleclickOfCard(hostel)} // FIXED
          />
        ))}
      </div>
    </div>
  );
};
