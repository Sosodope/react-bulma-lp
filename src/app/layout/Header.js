import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../assets/images/logo.png";

class Header extends React.Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <nav
        className="navbar"
        aria-label="main navigation"
        style={{ borderBottom: "solid 1px #dddddd" }}
      >
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/" activeClassName="is-active">
            <img
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                borderBottomLeftRadius: "50%",
                borderBottomRightRadius: "50%",
                marginRight: 15
              }}
              src={Logo}
              width="30px"
              alt="Company logo"
            />
            <span className="brand">mamon</span>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link" to="/about">
                About Us
              </NavLink>
              <div className="navbar-dropdown">
                <NavLink
                  className="navbar-item"
                  to="/overview"
                  activeClassName="is-active"
                >
                  Overview
                </NavLink>
                <hr className="navbar-divider" />
                <NavLink className="navbar-item" to="/team">
                  The Team
                </NavLink>
                <NavLink className="navbar-item" to="/careers">
                  Careers
                </NavLink>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Product</a>
              <div className="navbar-dropdown">
                <NavLink className="navbar-item" to="/tour">
                  Tour
                </NavLink>
                <hr className="navbar-divider" />
                <NavLink className="navbar-item" to="/training">
                  Training Services
                </NavLink>
                <NavLink className="navbar-item" to="/add-ons">
                  Add-ons
                </NavLink>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Pricing Plan</a>
              <div className="navbar-dropdown">
                <NavLink className="navbar-item" to="/individual-pricing">
                  Individual
                </NavLink>
                <hr className="navbar-divider" />
                <NavLink className="navbar-item" to="/corporate-pricing">
                  Company
                </NavLink>
              </div>
            </div>
            <div className="navbar-item">
              <NavLink className="navbar-item button is-primary" to="/sign-up">
                Sign Up Free
              </NavLink>
            </div>
          </div>
          {/* <div className="navbar-end">
            <NavLink className="navbar-item" to="/contact">
              <p>Contact Us</p>
              <span className="icon has-text-info" style={{ color: "#0084FF" }}>
                <i class="fas fa-envelope" />
              </span>
            </NavLink>
            <NavLink className="navbar-item" to="/sign-up">
              Sign Up Free
            </NavLink>
          </div> */}
        </div>
      </nav>
    );
  }
}

export default Header;
