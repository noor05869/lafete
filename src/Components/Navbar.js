import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../middleWare/Auth/Auth";
import "../styles.css";
function Navbar() {
  const [onscroll, setonscroll] = useState();
  const tokenn = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("login"));
  const isProfileCompleted = user?.response.data.is_profile_completed;
  const navigate = useNavigate();
  console.log("jsom", user?.response.data.is_profile_completed);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setonscroll("navcolor");
      } else {
        setonscroll("transparent");
      }
    });
  }, [tokenn, user]);
  const handleProfile = () => {
    if (isProfileCompleted) {
      console.log("isisProfileCompleted", isProfileCompleted);
      navigate("/register");
    } else {
      navigate("/completeprofile");
    }
  };
  const handleLogout = () => {
    Auth.logout();
  };
  console.log(onscroll);
  return (
    <div>
      <nav
        class={`navbar navbar-expand-lg ${onscroll} fixed-top   nav-bar`}
        id="mainNav"
      >
        <div class="container">
          <a class="navbar-brand" href="#page-top">
            <img src="assets/img/navbar-logo.svg" alt="..." />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars ms-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">
                  All venue
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              {/* <li class="nav-item"><Link class="nav-link" href="#team">Team</Link></li> */}
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              {!tokenn ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/signup">
                      SignUp
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/signIN">
                      SigniN
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li class="nav-item">
                    <a onClick={handleProfile} class="nav-link" href="">
                      Provide Services
                    </a>

                    {/* <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="/register">
                      Complete your Profile
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="/register">
                      Event Orgnaizer
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="register">
                      Catering
                    </Link>
                  </li>
                </ul> */}
                  </li>
                  <li class="nav-item">
                    <Link onClick={handleLogout} class="nav-link" to="/signIN">
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
