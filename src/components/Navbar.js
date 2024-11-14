import React from "react";
import PropTypes from "prop-types";

export default function Navbar({
  title = "Enter title",
  home = "Enter home",
  about = "Enter about",
  darkMode = "Enter dark mode or not",
  asliToggleMode,
}) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={darkMode}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {about}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-check form-switch text-light">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={asliToggleMode}
            style={{
              backgroundColor:
                darkMode === "dark" ? "white" : "rgb(33, 37, 41)",
            }}
          />
          <label
            className="form-check-label mx-5"
            htmlFor="flexSwitchCheckDefault"
            style={{ color: darkMode === "dark" ? "white" : "rgb(33, 37, 41)" }}
          >
            {darkMode === "dark" ? "Enable Light mode" : "Enable Dark mode"}
          </label>
        </div>
      </nav>
      <br />
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string,
  heading: PropTypes.string,
  darkMode: PropTypes.string,
  asliToggleMode: PropTypes.func,
};
