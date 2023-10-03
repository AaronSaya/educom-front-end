import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Images from "../../atoms/Images/";
import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";
import Buttongroup2 from "../../molecules/Buttongroup2";
import Backgroundimage from "../../../resources/images/shooshes.svg";

/// TODO: Define props for Section
const Section = () => {
  return (
    <div className="Section">
      <div className="card"  style={{
              background: `url(${Backgroundimage})`,
            }}>
        <div className="card-row">
          <div className="section">
            <Images type="primary" size="large" />
          </div>
          <div className="Content">
            <Logo type="primary" size="medium" />
            <Title type="primary" />
            <Text type="primary" />

            <Buttongroup2
              position="center"
              buttonLeft={{
                text: "Concept",
                onClick: () => {},
              }}
              buttonRight={{
                text: "Participate",
                onClick: () => {},
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
