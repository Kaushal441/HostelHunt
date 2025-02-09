import { configureStore } from "@reduxjs/toolkit";
import hostelReducer from "../reduxSlices/hostelSlice"; // Import your reducer
import authSlice from "../reduxSlices/authSlice";
import { signupUser } from "../reduxSlices/signupSlice";

// Configure the store using Redux Toolkit's configureStore
export const store = configureStore({
  reducer: {
    Hostel: hostelReducer, // Add your hostel reducer here
    auth: authSlice,
    signup: signupUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignoring non-serializable values in actions and state
        ignoredActions: ["auth/signupUser/rejected"],
        ignoredActionPaths: ["payload", "meta"],
        ignoredPaths: ["items.dates", "items.value"], // You can ignore other paths if necessary
      },
    }),
});

export default store;
