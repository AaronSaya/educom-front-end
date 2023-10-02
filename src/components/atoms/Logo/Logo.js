import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import logo from '../../../resources/images/re-cognition-logo.svg';
/// TODO: Define props for Logo
const Logo = (props) => {

    return( 
        <div data-testid={ props.testID }
             data-object-type={ props.type ?? ""}
             className={ `Logo ${props.size}` }>
           <div><img src={logo} alt="Logo Alt Text" /></div>  
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
    "secondary"
]

Logo.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Logo