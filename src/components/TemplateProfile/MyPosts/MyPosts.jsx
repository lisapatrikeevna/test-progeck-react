import React from 'react';
// import cl from './MyPosts/TemplateProfile/components/css/MyPost.css';
import cl from './MyPost.module.css';
import Post from './Post';

const MyPosts = (props) => {

let postsElement = props.postMessage
.map( (p) => <Post message = {p.message} likesCount = {p.likesCount} /> );

let newPostElement = React.createRef();//создаем ссылку для текстериа

let addPost = () => {
  let text = newPostElement.current.value;
  props.addPost(text);
  newPostElement.current.value = '';
}
    return(
    <div className ={cl .post}>
      <h2>My Posts</h2>
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost} className={cl .btnAddet}>Add post</button>
      </div>
      <div className ={cl .posts}>
        {/* <Post message={postMessage[0].message } likesCount={postMessage[0].likesCount}/> */}
        {postsElement}
      </div>
    </div>
    );
}
export default MyPosts;