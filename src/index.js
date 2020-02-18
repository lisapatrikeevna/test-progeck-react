 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postMessage = [
    {id: 0, message: 'Hi, how are you?', likesCount: 23},
    {id: 1, message: 'Its my first post.', likesCount: 13},
    {id: 2, message: 'bla-bla', likesCount: 13}
];
   
let messageData = [    
    {id: 0, message: 'hi'},
    {id: 1, message: 'are you besy?'},
    {id: 2, message: 'yes'}  
];
let dialogItem = [
    {id: 0, name: 'Lisa15'},
    {id: 2, name: 'Dan'},
    {id: 3, name: 'Kat'}
  ]
    ReactDOM.render(<App postMessage={postMessage} dialogItem={dialogItem} messageData={messageData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//export default dialogData;
