import React from "react";

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
          <a className="navbar-item">
            <img
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                borderBottomLeftRadius: "50%",
                borderBottomRightRadius: "50%",
                marginRight: 15
              }}
              src="https://images.unsplash.com/photo-1530779999716-9271dcb59efa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9904288c84dfbe031e87da5892dc9e02&auto=format&fit=crop&w=1473&q=80"
              width="30px"
              alt="Company logo"
            />
            <span>My Company</span>
          </a>
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
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">About Us</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Overview</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">The Team</a>
                <a className="navbar-item">Careers</a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Product</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Tour</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Training Services</a>
                <a className="navbar-item">Add-ons</a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Pricing Plan</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Individual</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Company</a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="#">
              <p>Contact Us</p>
              <span className="icon has-text-info" style={{ color: "#0084FF" }}>
                <i class="fas fa-envelope" />
              </span>
            </a>
            <a className="navbar-item" href="#">
              Sign Up Free
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
