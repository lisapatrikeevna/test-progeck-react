import React from 'react';
import MyPosts from './MyPosts';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';


const MyPostsWrap = (props) => {
let state = props.store.getState();

let addPost = () => {
  props.store.dispatch(addPostActionCreator());
}

let onPostChange = (text) =>{
  let action = updateNewPostTextActionCreator(text);
  props.store.dispatch(action);
}
    return(<MyPosts 
      updateNewPostText = {onPostChange} 
      addPost= {addPost} 
      postMessage = {state.pointBlog.postMessage}
      newPostText = {state.pointBlog.newPostText}/>);
}
export default MyPostsWrap;