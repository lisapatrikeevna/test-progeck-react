import React from 'react';
import  "./css/Dialogs.css";
import DialogData from "./TemplateDialogs/UserDialogs/DialogData.jsx";
import MessagesItem from "./TemplateDialogs/UserDialogs/MessagesItem.jsx";

const Dialogs = (props) => {
// debugger; 

let dialogsElements = props.dialogItem.map( (dialog) => <DialogData name = {dialog.name} id = {dialog.id} /> );

let messageElements = props.messageData.map( (message) => <MessagesItem message = {message.message} id = {message.id}/> );

    return(
        <section className = 'dialogs'>
            <div className = 'users__wrepp'>
                {dialogsElements}
            </div>
            <div className = 'messages'>
                {messageElements}
            </div>
        </section>
    );

}


export default Dialogs;