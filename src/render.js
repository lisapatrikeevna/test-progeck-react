import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {BrowserRouter, Route} from "react-router-dom";
import App from './App';
import {addPost} from './redux/state.js';
// import state from './redux/state';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
}

// export default render;