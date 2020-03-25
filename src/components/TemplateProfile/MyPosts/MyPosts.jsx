import React from 'react';
import cl from './MyPost.module.css';
import Post from './Post';

const MyPosts = (props) => {

let postsElement = props.postMessage.map( (p) => <Post 
message = {p.message} likesCount = {p.likesCount} /> );

let newPostElement = React.createRef();
let onAddPost = () => {
  props.addPost();
}

let onPostChange = () =>{
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}
    return(
    <div className ={cl .post}>
      <h2>My Posts</h2>
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} 
        value={props.newPostText}/>
        <button onClick={onAddPost} className={cl .btnAddet}>Add post</button>
      </div>
      <div className ={cl .posts}>
        {postsElement}
      </div>
    </div>
    );
}
export default MyPosts;