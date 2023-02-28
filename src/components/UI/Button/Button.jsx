import '../../../index.css';
import React from 'react';



const Button = (props)=>{
    
    return(
            <button id={props.id} className={props.className} onClick={props.onClick} disabled={props.disabled} hidden={props.hidden} >{props.children}</button>
        
    )
}

export default Button;