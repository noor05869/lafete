import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Screens/landingpage/LandingPage";
import { Routes, Route, Navigate } from "react-router-dom";
import VenueDetialsPage from "./Components/VenueDetialsPage";
import SignIn from "./Screens/SignIn";
import SignupOptions from "./Screens/SignupOptions";
import SignUp from "./Screens/SignUp";
import VenueList from "./Components/VenueList";
import Regsiter from "./Screens/Register";
function MainRoutes() {
  return (
    <div className="Routes">
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<LandingPage />} />

        <Route path="/decordetails" element={<VenueList />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/register" element={<Regsiter />} />
        <Route path="/VenueDetials" element={<VenueDetialsPage />} />

        <Route path="/Signupoptions" element={<SignupOptions />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
