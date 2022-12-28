

import React from "react";

function NavBar () {
    return (
        <ul>
            <li> Logo </li>

            <li> 
                <a href= "">Estampas </a> 
             </li>

            <li>
                <a href= ""> Invierno </a>  
             </li>

            <li>
                <a href=""> Verano </a> 
             </li>

             <li>
             <img width="50" src= "assets/img/cart.jpg" alt="CartWidget"> </img>
             </li>
        </ul>
    );
}

export default NavBar;