import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Topbar from '../../molecules/Topbar'
import Section from '../../molecules/Section'
import Swoosh from '../../atoms/Backgroundimage'

/// TODO: Define props for Chapter
const Chapter = (props) => {

    return(
        <div className="Chapter">
            
        <div>
            <Topbar></Topbar>
            <Section></Section>   
        </div>
        </div>
    )

}


export default Chapter