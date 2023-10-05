import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Images from "../../atoms/Images/";
import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";
import Buttongroup2 from "../../molecules/Buttongroup2";
import Footer from "../../atoms/Footer";

/// TODO: Define props for Section3
const Section3 = (props) => {
    return (
        <div className="Section">
          <div className="card">
            <div className="card-row">
              <div className="sectionImage">
                <Images type="secondary" size="large" />
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
             <Footer/>
          </div>
        </div>
      );
    };

export default Section3