import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Screens/landingpage/LandingPage";
import { Routes, Route } from "react-router-dom";
import VenueDetialsPage from "./Components/VenueDetialsPage";
import SignIn from "./Screens/SignIn";
import SignupOptions from "./Screens/SignupOptions";
import SignUp from "./Screens/SignUp";
import VenueList from "./Components/VenueList";
function MainRoutes() {
  return (
    <div className="Routes">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/decordetails" element={<VenueList />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/VenueDetials" element={<VenueDetialsPage />} />

        <Route path="/Signupoptions" element={<SignupOptions />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
