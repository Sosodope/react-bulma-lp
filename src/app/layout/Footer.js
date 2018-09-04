import React from "react";
import Logo from "./../assets/images/logo.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content">
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
            <div className="social">
              <i class="fab fa-github" />
              <i class="fab fa-behance" />
              <i class="fab fa-linkedin-in" />
              <i class="fab fa-codepen" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
