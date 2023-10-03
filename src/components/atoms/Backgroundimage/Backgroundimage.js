import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import swoosh from "../../../resources/images/swoosh.svg";
import shooshes from "../../../resources/images/shooshes.svg";

/// TODO: Define props for Backgroundimage
const Backgroundimage = (props) => {
    if (props.type === "shoosh")
    
  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`Backgroundimage ${props.size}`}
    >
      <img src={shooshes} alt="Shooshes" />
    </div>
  ); else {
    return (
        <div
          data-testid={props.testID}
          data-object-type={props.type ?? ""}
          className={`Backgroundimage ${props.size}`}
        >
          <img  src={swoosh} alt="Swoosh" />
        </div>
 ) }
};

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = ["small", "medium", "large"];

const exceptionClasses = ["shoosh", "swoosh"];

Backgroundimage.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
};

export default Backgroundimage;
