import React  from 'react';
import cl from'./css/Profile.module.css';
import ProfileInfo from './TemplateProfile/ProfileInfo/ProfileInfo';
import MyPostsWrap from './TemplateProfile/MyPosts/MyPostsWrap'
// debugger;

const Profile = (props) => {
 
    return(
      <section className = 'content d-flex'>
        <div>
          <div className = {cl .main__image}>
            {/* <img src="./TemplateProfile/img/8.jpg"/> */}
          </div>
          <ProfileInfo/>
          <MyPostsWrap store = {props.store}/>
        </div>
      </section>
    );
}

export default Profile;