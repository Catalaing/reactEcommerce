
import React from "react";


function Item (props) {
    const {title, price, detail, img,size}= props;
    return(
<div>
    <div>
        <img width="180" src= {img} alt="remeras"> </img>
    </div>
    
    <h3>{title}</h3>
    <p> {detail} </p>
    <p> {size} </p>
    <h4> $ {price}</h4>
</div>
 )
}

export default Item