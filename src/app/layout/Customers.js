import React from "react";
import decos from "../assets/images/customers/logo-decos.png";
import flitsmeister from "../assets/images/customers/logo-flitsmeister.png";
import hotelchamp from "../assets/images/customers/logo-hotelchamp.png";
import lightspeed from "../assets/images/customers/logo-lightspeed.png";
import nos from "../assets/images/customers/logo-nos.png";
import redkix from "../assets/images/customers/logo-redkix.png";
import sap from "../assets/images/customers/logo-sap.png";
import shutterfly from "../assets/images/customers/logo-shutterfly.png";
import spiderStrategies from "../assets/images/customers/logo-spider-strategies.png";
import tiqets from "../assets/images/customers/logo-tiqets.png";
import tripadvisor from "../assets/images/customers/logo-tripadvisor.png";
import trvl from "../assets/images/customers/logo-trvl.png";

const logos = [
  `${decos}`,
  `${flitsmeister}`,
  `${hotelchamp}`,
  `${lightspeed}`,
  `${nos}`,
  `${redkix}`,
  `${sap}`,
  `${shutterfly}`,
  `${spiderStrategies}`,
  `${tiqets}`,
  `${tripadvisor}`,
  `${trvl}`
];

const Customers = () => {
  return (
    <div class="level logos">
      {logos.map(logo => {
        return (
          <div class="level-item has-text-centered">
            <img src={logo} />
          </div>
        );
      })}
    </div>
  );
};

export default Customers;
