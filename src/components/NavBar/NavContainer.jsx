import './components/Flex.css';
import React from 'react';


function NavContainer (props) {
    return(
        <div className="flex"> {props.children} </div> 
    )
}

export default NavContainer