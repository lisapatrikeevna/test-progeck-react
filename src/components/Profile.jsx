import React  from 'react';
import cl from'./css/Profile.module.css';
import MyPosts from './TemplateProfile/MyPosts/MyPosts';


const Profile = () => {
    return(
        <section className='content d-flex'>
       
        <div className={cl .wrappContent}>
          <div className={cl .main__image}>
            <img src="http://webstydio.lisa15.ru/image/cache/catalog/demo/product/distancionnoeotkrytiefirmy-500x500.jpg"/>
          </div>
          <div className='ava-desc d-flex'>
          <img src='http://webstydio.lisa15.ru/image/cache/catalog/demo/product/juridicheskoesoprovozhdenie2-74x74.jpg'/>
            <p>
              nnnnnn noijj  pkp 
            </p>
          </div>
          <MyPosts/>
        </div>
      </section>
    );
}

export default Profile;