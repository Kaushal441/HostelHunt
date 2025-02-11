import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthPage } from "./organisms/authPage";
import { HomePage } from "./organisms/homePage";
import { AboutUsPage } from "./organisms/aboutUsPage";
import { ContactPage } from "./organisms/contactPage";
import RegisterPage from "./organisms/registerPage";
import ResetPage from "./organisms/resetPage";
import { AdminHomePage } from "./organisms/adminHomePage";
import { HostelOwnerHomePage } from "./organisms/hostelOwnerHome";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/adminhome" element={<AdminHomePage />} />
        <Route path="/hostelOwnerHome" element={<HostelOwnerHomePage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
