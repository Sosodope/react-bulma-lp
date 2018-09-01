import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              Built on <strong>React</strong> with <strong>Bulma</strong> by Me!{" "}
              <a href="https://github.com/aaronklaser">My Company</a>
              <br />
              Copyright 2018
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
