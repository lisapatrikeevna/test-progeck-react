import React from 'react';
// import cl from './MyPosts/TemplateProfile/components/css/MyPost.css';
import cl from './MyPost.module.css';
import Post from './Post';
// import crs='<script src="https://kit.fontawesome.com/6978b72a20.js" crossorigin="anonymous"></script>';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';


const MyPosts = () =>{
    return (
    <div className={cl .post}>
      <h2>My Posts</h2> 
      <div>
        <textarea></textarea>
        <button className={cl .btnAddet}>Add post</button>
      </div>
      <div className={cl .posts}>
        <Post message='Hi, how are you?'/>
        <Post message= 'Its my first post.'/>
      </div>
      <div>
        {/* <Post count='10'/><span><i class="far fa-thumbs-up"></i></span> */}
      </div>
    </div>
    );
}
 export default MyPosts;