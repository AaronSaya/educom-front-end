import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/// TODO: Define props for Text
const Text = (props) => {
  return (
    <div
      data-testid={props.testID}
      data-object-type={props.type ?? ""}
      className={`Text ${props.size} more utility classes`}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate,
      turpis quis cursus bibendum, justo dui sollicitudin erat, nec consectetur
      dolor ante non libero. Proin in justo et massa eleifend tempus. Vivamus
      venenatis tortor sed justo fermentum lacinia. Phasellus lacinia feugiat
      arcu eu lacinia. Nullam condimentum, quam id efficitur varius, augue
      tellus posuere mi, nec fringilla libero elit nec massa. Praesent fermentum
      ac nunc in dictum. Vivamus vitae ligula nec tortor elementum interdum. Sed
      nec urna in ante iaculis vestibulum. Integer luctus massa eu erat
      malesuada fringilla. In hac habitasse platea dictumst. Nullam venenatis
      urna vitae cursus malesuada. Maecenas vehicula, nisi id volutpat pharetra,
      eros libero vulputate justo, id tristique nisl mi a justo. Nulla facilisi.
    </div>
  );
};

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = ["small", "medium", "large"];

const exceptionClasses = ["primary", "secondary"];

Text.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(exceptionClasses),
  size: PropTypes.oneOf(sizes),
};

export default Text;
