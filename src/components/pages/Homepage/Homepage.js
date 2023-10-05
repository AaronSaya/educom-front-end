import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Chapter from '../../organisms/Chapter'
import Section2 from '../../molecules/Section2'
import Section3 from '../../molecules/Section3'

/// TODO: Define props for Homepage
const Homepage = (props) => {

    return(
        <div className="Homepage">
            <Chapter/>
            <Section2 />
            <Section3 />
        </div>
    )

}

const sizes = [
    "small",
    "medium",
    "large"
]

const exceptionClasses = [
    "button",
    "regular"
]

Homepage.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Homepage