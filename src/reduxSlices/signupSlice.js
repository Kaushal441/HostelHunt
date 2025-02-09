import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for the signup slice
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Create an asynchronous thunk action for signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, username, password }, { rejectWithValue }) => {
    try {
      // Define the API endpoint for signup
      const response = await fetch("http://localhost:8000/student/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, username, password }),
      });

      // Check for successful response
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to signup");
      }

      // Parse the response and return user data
      const data = await response.json();
      return data;
    } catch (error) {
      // Reject with error message if any failure occurs
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Create the signup slice with reducers and extra reducers for async actions
const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    // You can add reducers like reset error or user info
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state (when signup is in progress)
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle successful signup
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      // Handle errors from signup
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = signupSlice.actions;
export default signupSlice.reducer;
