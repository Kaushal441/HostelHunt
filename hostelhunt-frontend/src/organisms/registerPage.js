import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../reduxSlices/signupSlice";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signupUser(formData))
      .unwrap()
      .then(() => {
        toast.success("Registration Successful!");
        setFormData({
          name: "",
          email: "",
          username: "",
          password: "",
        });
        navigate("/"); // Redirect to homepage after successful registration
      })
      .catch((error) => {
        toast.error(error || "Something went wrong");
      });
  };

  const registerPageStyles = {
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Roboto', sans-serif",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formContainerStyles = {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "40px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-out",
    animation: "fadeIn 0.8s ease-out",
  };

  const inputFieldStyles = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1rem",
    color: "#333",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  const submitButtonStyles = {
    padding: "12px 30px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
  };

  const submitButtonHoverStyles = {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  };

  const sectionTitleStyles = {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.5rem",
    color: "#333",
  };

  return (
    <>
      <ToastContainer />
      <div style={registerPageStyles}>
        <div style={formContainerStyles}>
          <h1 style={sectionTitleStyles}>Create Your Account</h1>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />

            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />

            {/* Username Field */}
            <input
              type="text"
              name="username"
              placeholder="Your Username"
              value={formData.username}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />

            {/* Password Field */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={inputFieldStyles}
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              style={submitButtonStyles}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
