import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import handphoneImage from "../../../resources/images/hand-phone.png";
import phoneImage from "../../../resources/images/twee-telefoons.png";

/// TODO: Define props for Image
const Image = (props) => {
  if (props.type === "primary") {
    return (
      <div
        data-testid={props.testID}
        data-object-type={props.type ?? ""}
        className={`Image  ${props.size} ${props.images} `}
      >
        <img src={handphoneImage} alt="HandPhoneImage" />
      </div>
    );
  } else {
    return (
      <div
        data-testid={props.testID}
        data-object-type={props.type ?? ""}
        className={`Image  ${props.size} more utility classes`}
      >
        <img src={phoneImage} alt="PhoneImage" />
      </div>
    );
  }
};

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = ["small", "medium", "large"];

const exceptionClasses = ["primary", "secondary"];

Image.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
};

export default Image;
