import React from 'react';
import  "./css/Dialogs.css";
import DialogData from "./TemplateDialogs/UserDialogs/DialogData.jsx";
import MessagesItem from "./TemplateDialogs/UserDialogs/MessagesItem.jsx";
import{updateNewMessageTextCreator,sendMessageCreator} from "../redux/dialogs-reducer";
import Dialogs from './Dialogs';

const DialogsWrap = (props) => {
let state =props.store.getState().pointMessages;

let addSend = () => {
    props.store.dispatch(sendMessageCreator());
}

let onSendMessageChange = (body) => {
    props.store.dispatch(updateNewMessageTextCreator(body));
}
    return(
        <Dialogs  
        updateNewMessageText = {onSendMessageChange}
        sendMessage = {addSend}
        pointMessages = {state}
        /> );

}


export default DialogsWrap;