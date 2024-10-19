import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import logo from "./assets/logo.jpg";

function NavBar() {
  const currentPath = window.location.pathname;

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />{" "}
        </a>
        <h1
          style={{ marginLeft: "10px", fontSize: "1.5rem", lineHeight: "40px" }}
        >
          <b>
            <i>IEEE CIS REC</i>
          </b>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${currentPath === "/" ? "active" : ""}`}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  currentPath === "/domain" ? "active" : ""
                }`}
                href="/domain"
              >
                Domain
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  currentPath === "/events" ? "active" : ""
                }`}
                href="/events"
              >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  currentPath === "/about" ? "active" : ""
                }`}
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  currentPath === "/crew" ? "active" : ""
                }`}
                href="/crew"
              >
                Our Crew
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
