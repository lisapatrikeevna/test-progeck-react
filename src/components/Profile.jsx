import React  from 'react';
import cl from'./css/Profile.module.css';
import MyPosts from './TemplateProfile/MyPosts/MyPosts';
import ProfileInfo from './TemplateProfile/ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return(
      <section className = 'content d-flex'>
        <div>
          <div className = {cl .main__image}>
            <img src="./TemplateProfile/img/8.jpg"/>
          </div>
          <ProfileInfo/>
          <MyPosts postMessage = {props.state.postMessage} addPost = {props.addPost}/>
        </div>
      </section>
    );
}

export default Profile;