
import './components/Flex.css';
import './components/Salud.css';
import React from 'react';

export default function ItemListContainer () {
    return(
        <div className="flex"> {props.children} </div> 
    )
}

export function ItemListContainer (props) {
    return(
        <div className='saludo'> {props.saludo} </div> 
    )
}


