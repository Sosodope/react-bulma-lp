import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Site from "./layout/Site";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

const Layout = ({ children }) => (
  <Site>
    <Helmet
      title=" MyCompany"
      meta={[
        {
          name: "description",
          content: "Company Landing page"
        },
        {
          name: "keywords",
          content: "marketing, company"
        }
      ]}
      script={[
        { src: "https://use.fontawesome.com/releases/v5.0.4/js/all.js" }
      ]}
      link={[
        {
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        }
      ]}
    />
    <Header />
    <Content>{/* {children()} */}</Content>
    <Footer />
  </Site>
);

export default Layout;
