import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
// import {addPost, updateNewPostText, subscribe} from './redux/state';
import store from './redux/redux-store';
// import { addPost, updateNewPostText } from './redux/state';
// import {rerenderEntireTree} from '../components/render';
// import {rerenderEntireTree} from "./render";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
//ReactDOM.render(<App postMessage={postMessage} dialogItem={dialogItem} messageData={messageData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
