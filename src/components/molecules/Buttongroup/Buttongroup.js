import PropTypes from "prop-types";

import Button from "../../atoms/Button";

const Buttongroup = ({
  position,
  padding,
  buttonLeft,
  buttonMiddle,
  buttonRight,
}) => {
  let flPosition = "center";
  if (position === "left") flPosition = "flex-start";
  if (position === "right") flPosition = "flex-end";

  const style = {
    justifyContent: flPosition,
    padding: padding,
  };

  const clickHandler = () => {};

  return (
    <div className="Buttongroup" style={style}>
      <Button
        text={buttonLeft.text}
        size={buttonLeft.size}
        backgroundColor={buttonLeft.backgroundColor}
        color={buttonLeft.color}
        onClick={clickHandler}
        type="tertiary"
      />

      <Button
        text={buttonMiddle.text}
        size={buttonMiddle.size}
        backgroundColor={buttonMiddle.backgroundColor}
        color={buttonMiddle.color}
        onClick={clickHandler}
        type="tertiary"
      />

      <Button
        text={buttonRight.text}
        size={buttonRight.size}
        backgroundColor={buttonRight.backgroundColor}
        color={buttonRight.color}
        onClick={clickHandler}
        type="tertiary"
      />
    </div>
  );
};

Buttongroup.propTypes = {
  position: PropTypes.oneOf(["left", "center", "right"]),
  padding: PropTypes.number,
  buttonLeft: PropTypes.objectOf({
    text: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
  }),
  buttonRight: PropTypes.objectOf({
    text: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

export default Buttongroup;
