import React from "react";

const Nav = () => {
  return (
    <div className="navbar-fixed">
      <nav className="nav-extended #424242 grey darken-3">
        <div className="nav-wrapper">
          <a id="homeBtn" href="#" className="brand-logo font">
            Myhkas Nallas
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li id="aboutBtn" className="font">
              <a>About</a>
            </li>
            <li id="portfolioBtn" className="font">
              <a>Portfolio</a>
            </li>
            <li id="contactBtn" className="font">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
