import React from 'react';
import  cl from "./DialogData.module.css";
import {NavLink} from "react-router-dom";

// const DialogData = (props) => {
//     return(
//         <div className = 'user-name'>
//             <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
//         </div>
//     )
// }
const DialogData = (props) => {

    
    let path = "/dialogs/" + props.id;
    return(
        <div className = 'user-name'>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
}

export default DialogData;