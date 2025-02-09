import React from "react";
import Header from "../atom/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // For toast styling
import "../styles/aboutuspage.css";

export const AboutUsPage = () => {
  const aboutUsStyles = {
    height: "100vh",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Roboto', sans-serif",
  };

  const sectionTitleStyles = {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
    animation: "fadeIn 1s ease-out",
  };

  const sectionTextStyles = {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.7",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    animation: "fadeIn 1.5s ease-out",
  };

  const teamContainerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginTop: "40px",
    animation: "fadeIn 2s ease-out",
  };

  const teamMemberStyles = {
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const teamMemberImageStyles = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  };

  const teamMemberNameStyles = {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#333",
  };

  const teamMemberRoleStyles = {
    fontSize: "1rem",
    color: "#777",
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <div style={aboutUsStyles}>
        <h1 style={sectionTitleStyles}>About Us</h1>
        <p style={sectionTextStyles}>
          We are a team of passionate professionals committed to bringing the
          best hostel booking experience for you. Our platform helps students
          and travelers find affordable and comfortable accommodations all over
          the world.
        </p>
        <p style={sectionTextStyles}>
          Our mission is to provide seamless access to quality hostels that
          offer a home-like experience while you're away from home.
        </p>

        <h2 style={sectionTitleStyles}>Meet Our Team</h2>

        <div style={teamContainerStyles}>
          <div style={teamMemberStyles} className="team-member">
            <img
              src="https://via.placeholder.com/120"
              alt="John Doe"
              style={teamMemberImageStyles}
            />
            <h3 style={teamMemberNameStyles}>John Doe</h3>
            <p style={teamMemberRoleStyles}>CEO & Founder</p>
          </div>
          <div style={teamMemberStyles} className="team-member">
            <img
              src="https://via.placeholder.com/120"
              alt="Jane Smith"
              style={teamMemberImageStyles}
            />
            <h3 style={teamMemberNameStyles}>Jane Smith</h3>
            <p style={teamMemberRoleStyles}>Product Manager</p>
          </div>
          <div style={teamMemberStyles} className="team-member">
            <img
              src="https://via.placeholder.com/120"
              alt="Raj Patel"
              style={teamMemberImageStyles}
            />
            <h3 style={teamMemberNameStyles}>Raj Patel</h3>
            <p style={teamMemberRoleStyles}>Lead Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};
