import React from "react";
import "./nav.css";
// import "./404.png";
export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg  bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">
          {/* <img src="404.png" alt="o" width="30" height="24" /> */}
          <h2>PROFILE DETECTOR</h2>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse rside" id="navbarNavDropdown">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <h5>blog</h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <h5>community</h5>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navbar-nav justify-content-end">
            <div className="dropdown dropstart">
              <button
                type="button"
                className="btn btn-outline-light dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                account
              </button>
              <form className="dropdown-menu p-4">
                <div className="mb-3">
                  <label
                    htmlFor="exampleDropdownFormEmail2"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleDropdownFormEmail2"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleDropdownFormPassword2"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleDropdownFormPassword2"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="dropdownCheck2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="dropdownCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  New around here? Sign up
                </a>
                <a className="dropdown-item" href="/">
                  Forgot password?
                </a>
              </form>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
