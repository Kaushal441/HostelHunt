import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for the slice
const initialState = {
  user: null, // To store user data after login
  loading: false, // To track loading state (e.g., while logging in)
  error: null, // To store any error message if login fails
};

// Create an asynchronous thunk action for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password, userType }, { rejectWithValue }) => {
    try {
      // Determine the appropriate API endpoint based on the user type
      let url = "";
      if (userType === "student") {
        url = `http://localhost:8000/student/login?username=${username}&password=${password}`;
      } else if (userType === "admin") {
        url = `http://localhost:8000/admin/login?username=${username}&password=${password}`;
      } else if (userType === "hostelOwner") {
        url = `http://localhost:8000/hostelOwner/login?username=${username}&password=${password}`;
      }

      // Make the API call for logging in using fetch (GET request)
      const response = await fetch(url, {
        method: "POST", // HTTP method changed to GET since we are sending params in the URL
        headers: {
          "Content-Type": "application/json", // Still setting the content type, though it's not really necessary for GET
        },
      });

      // If response status is not 200-299, throw an error
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      // Parse the response as JSON
      const data = await response.json();
      console.log("API response received:", data);

      // Return the user data (or any other relevant data from the response)
      return data;
    } catch (error) {
      // Return the error if something went wrong
      return rejectWithValue(error.message || "Something went wrong"); // Reject with the error message
    }
  }
);

// Create the slice with reducers
const authSlice = createSlice({
  name: "auth",
  initialState, // Set initialState here
  reducers: {
    // You can add reducers like logout, reset error, etc. if needed
    logout: (state) => {
      state.user = null; // Clear user data when logging out
    },
  },
  extraReducers: (builder) => {
    builder
      // For login pending state
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset errors when initiating login
      })
      // For login fulfilled state (successful login)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Store user data
      })
      // For login rejected state (login failed)
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message if login fails
      });
  },
});

// Export actions
export const { logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;