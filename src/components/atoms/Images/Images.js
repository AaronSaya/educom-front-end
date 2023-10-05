import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import handphoneImage from "../../../resources/images/hand-phone.png";
import phoneImage from "../../../resources/images/twee-telefoons.png";
import Neurosity from "../../../resources/images/neurosity2.png";

const imageSources = {
  primary: handphoneImage,
  secondary: phoneImage,
  tertiary: Neurosity,
};

const Image = (props) => {
  const imageSource = imageSources[props.type]; 

  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`Image ${props.size} ${props.images}`}
    >
      <img src={imageSource} alt={`${props.type} Image`} />
    </div>
  );
};

const sizes = ["small", "medium", "large"];

const exceptionClasses = ["primary", "secondary", "tertiary"];

Image.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
};

export default Image;