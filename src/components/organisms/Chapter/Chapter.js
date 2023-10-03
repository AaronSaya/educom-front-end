import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Section from '../../molecules/Section'
import Backgroundimage from '../../atoms/Backgroundimage'

/// TODO: Define props for Chapter
const Chapter = (props) => {

    return(
        <div className="Chapter">
            <Backgroundimage type="shoosh"></Backgroundimage>
        <div>
            
            <Section></Section>
        </div>
        </div>
    )

}


export default Chapter