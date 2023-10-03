import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Button
const Button = ({ testID, type, size, onClick, text }) => {


    return(
        <div
            data-testid={testID}
            data-object-type={type ?? ""}
            className={`Button ${size}`}
            onClick={onClick}
        >
            {text}
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
    "primary",
    "secondary",
    "tertiary"
]

const Text = [
    "Concept",
    "Participate",
    "Training",
    "News",
    "Information"
]


Button.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
    text: PropTypes.oneOf(Text),
    onClick: PropTypes.func
    
}

export default Button