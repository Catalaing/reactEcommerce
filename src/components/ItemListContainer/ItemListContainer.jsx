
import '../Flex.css';
import '../Salud.css';
import React from 'react';

export default function ItemListContainer ({saludo,children}) {
    
    return(
        <div className="flex"> {children} </div> 
    )
}




