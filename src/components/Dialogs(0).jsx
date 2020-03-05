import React from 'react';
import  "./css/Dialogs.css";
import DialogData from "./TemplateDialogs/UserDialogs/DialogData.jsx";
import MessagesItem from "./TemplateDialogs/UserDialogs/MessagesItem.jsx";

const Dialogs = (props) => {
// debugger; 

let dialogsElements = props.dialogItem
.map( (dialog) => <DialogData name = {dialog.name} id = {dialog.id} <link rel="manifest" href="//static.lpgenerator.ru/media/pushNotification/manifest.json">
<script type="text/javascript" src="//static.lpgenerator.ru/media/pushNotification/push.js"></script>/> );

let messageElements = props.messageData
.map( (message) => <MessagesItem message = {message.message} id = {message.id}/> );

let newMessage = React.createRef();//создаем ссылку для текстериа

let addSend = () => {
    // debugger;
    let textmessege = newMessage.current.value;
    alert(textmessege);
}
    return(
        <section className = 'dialogs'>
            <div className = 'users__wrepp'>
                {dialogsElements}
            </div>
            <div className = 'messages'>
                {messageElements}
                <div>
                    <p>написть сообщение</p>
                    <textarea ref={newMessage}></textarea>
                    <button onClick={ addSend } className='newMessage'>send</button>
                </div>
            </div>
        </section>
    );

}


export default Dialogs;
