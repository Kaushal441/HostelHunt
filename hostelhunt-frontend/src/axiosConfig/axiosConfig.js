import axios from "axios";

// Define the base URL for your API
const BASE_URL = "http://localhost:8000"; // Replace with your actual API base URL

// Create an axios instance with default settings
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // You can add more headers here if necessary
  },
});

// Function to make API calls
const apiCall = async (endpoint, method = "GET", data = null) => {
  try {
    const response = await axiosInstance({
      url: endpoint,
      method,
      data,
    });
    return response.data; // Return the data from the response
  } catch (error) {
    // Log any errors and throw them to be handled later
    console.error("API Error: ", error.message);
    throw error; // Rethrow error for handling in the calling component
  }
};

export default apiCall;
