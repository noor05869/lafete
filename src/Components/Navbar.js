import React, { useState, useEffect } from "react";
import "../styles.css";
function Navbar() {
  const [onscroll, setonscroll] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setonscroll("navcolor");
      } else {
        setonscroll("transparent");
      }
    });
  }, []);
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
              {/* <li class="nav-item"><a class="nav-link" href="#team">Team</a></li> */}
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/signup">
                  SignUp
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/signIN">
                  SigniN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
