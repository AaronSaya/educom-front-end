import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Logo from "../../atoms/Logo";
import Buttongroup from "../Buttongroup";

/// TODO: Define props for Header
const Topbar = () => {
  return (
    <div className="Topbar">
        <div className="row">
          <div className="Box">
            <Logo type="primary"></Logo>
          </div>
          <div className="Content">
            <Buttongroup
              position="right"
              buttonLeft={{
                text: "Training",
              }}
              buttonMiddle={{
                text: "News",
              }}
              buttonRight={{
                text: "Information",
              }}
            ></Buttongroup>
          </div>
        </div>
    </div>
  );
};
export default Topbar;
