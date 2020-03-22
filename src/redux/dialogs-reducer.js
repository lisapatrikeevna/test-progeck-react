const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE ='SEND-MESSAGE';

let initialState = {
    dialogItem: [
        {id: 0, name: 'Kat' } ,
        {id: 1, name:'Dan'},
        {id: 2, name:'Lisa'}
     ],
    messageData: [
        {id: 0, message: 'hi'},
        {id: 1, message: 'are you besy?'},
        {id: 2, message: 'yes'}

    ],
    newMessageText: ''
}

const dialogsReducer = ( state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messageData.push({id: 4, message: body});
            return state;
            default: return state;
    }
    return state;
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export  const updateNewMessageTextCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_TEXT, body: body}) 

export default dialogsReducer;
