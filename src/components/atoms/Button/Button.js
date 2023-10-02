import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Button
const Button = (props) => {

    if (props.type === 'primary') {

    return(
        <div data-testid={ props.testID }
             data-object-type={ props.type ?? ""}
             className={ `Button ${props.size}` }>
                Concept
        </div>
    ) 
    } else{
        return(
        <div data-testid={ props.testID }
             data-object-type={ props.type ?? ""}
             className={ `Button ${props.size}` }>
                Participant
        </div>
    ) 

    }

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

Button.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Button