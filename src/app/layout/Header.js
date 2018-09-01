import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav>
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
              src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU3AAAAJGE1MzYxNzYzLTE1NTUtNDEyYi04MzRjLTgzZjNkOGU0MGIzNg.jpg"
              width="30px"
              alt=""
            />
            <span>MyCompany</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
