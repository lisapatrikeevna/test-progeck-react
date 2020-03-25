import React from 'react';
import  "./css/Dialogs.css";
import DialogData from "./TemplateDialogs/UserDialogs/DialogData.jsx";
import MessagesItem from "./TemplateDialogs/UserDialogs/MessagesItem.jsx";
import{updateNewMessageTextCreator,sendMessageCreator} from "../redux/dialogs-reducer";

const Dialogs = (props) => {

let state =props.pointMessages;

let dialogsElements = state.dialogItem.map( (dialog) => <DialogData name = {dialog.name} id = {dialog.id} /> );
let messageElements = state.messageData.map( (message) => <MessagesItem message = {message.message} id = {message.id}/> );
let newMessageText = state.newMessageText;

let addSend = () => {
    props.sendMessage();
}

let onSendMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageText(body);
    // props.store.dispatch(updateNewMessageTextCreator(body));
}
    return(
        <section className = 'dialogs'>
            <div className = 'users__wrepp'>
                {dialogsElements}
            </div>
            <div className = 'messages'>
                <div>{messageElements}</div>
                <div className= 'new-message'>
                    <p>wright message</p>
                    <textarea onChange={onSendMessageChange} 
                        value={newMessageText}
                        placeholder="let text"></textarea>
                    <button onClick={addSend} className='newMessage'>send</button>
                </div>
            </div>
        </section>
    );

}


export default Dialogs;