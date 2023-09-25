import React from "react";
// import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="./graphic-element/logo.gif"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            {props.tittle}
          </a>
        </div>
      </nav>
    </div>
  );
}

// NavBar.PropTypes = {
//   tittle: string,
// };
