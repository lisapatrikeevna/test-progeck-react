import React  from 'react';
import './css/Header.css';

const Header = () => {
    return(
    <header  className='header'>
        <a href='http://webstydio.lisa15.ru/#bottom-content'> <img src='http://webstydio.lisa15.ru/image/catalog/product_globo_logo01.png' className='poolLeft'/></a>
        <ul className='contact poolRight'>
          <li>
            <a href='tel:0994714770'>
              099-47-147-70
            </a>
          </li>
          <li>
            <a href='tel:0960799742'>
              096-07-99-742
            </a>
          </li>
          <li>
            <a>viber</a>
          </li>
        </ul>
      </header>
      );
}
export default Header;