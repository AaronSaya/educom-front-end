import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";
import BackgroundImage from "../../../resources/images/swoosh.svg";
import Images from "../../atoms/Images/";
import Buttongroup2 from "../../molecules/Buttongroup2";

const Section2 = () => {
  return (
    <div className="Section">
      <div
        className="card"
        style={{
          background: `url(${BackgroundImage})`,
        }}
      >
        <div className="card-row">
          <div className="Content">
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
          <div className="sectionImage">
            <Images type="tertiary" size="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
