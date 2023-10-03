import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Logo from '../../atoms/Logo'
import Buttongroup from '../../molecules/Buttongroup'

/// TODO: Define props for Header
const Header = (props) => {

    return(
        <div className="headerContainer">
            <div>
            <Logo></Logo>
            <Buttongroup position="right"  
              buttonLeft={{
                text: "Training",
                onClick: () => {},
              }}
              buttonMiddle={{
                text:"News",
                onClick: () => {},
              }}
              buttonRight={{
                text: "Information",
                onClick: () => {},
              }}>
                
            </Buttongroup>
            </div>
        </div>
    )

}



export default Header