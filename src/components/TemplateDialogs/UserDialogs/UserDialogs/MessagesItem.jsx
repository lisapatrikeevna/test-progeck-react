import React from 'react';
import cl from  "./MessagesItem.module.css";

// const  MessagesItem = (props) => {
//     return(
//     <div className = 'message__item'>{props.message}</div>
//     )
// }
const MessagesItem = (props) => {
    return (
        <div className = 'messages-item'>
           {props.message}
        </div>
    );
}

export default MessagesItem;