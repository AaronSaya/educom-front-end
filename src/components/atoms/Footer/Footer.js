import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import footer from "../../../resources/images/footer.svg";

/// TODO: Define props for Footer
const Footer = (props) => {

    return(
        <div data-testid={ props.testID }
             data-object-type={ props.type ?? ""}
             className={ `Footer ${props.size} more utility classes` }>
                <img src={footer}/>
        </div>
    )

}

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = [
    "small",
    "medium",
    "large"
]

const exceptionClasses = [
    "button",
    "regular"
]

Footer.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Footer