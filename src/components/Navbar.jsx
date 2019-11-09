import React  from 'react';
import './css/Navbar.css';
const Navbar = () => {
    return(
<nav className='menu'>
          <ul>
            <li className='menu__item'><a href='#b'>blog</a></li>
            <li className='menu__item'><a href='#m'>messages</a></li>
            <li className='menu__item'><a href='#n'>news</a></li>
            <li className='menu__item'><a href='#music'>music</a></li>
          </ul>
        </nav>
    );
}
export default Navbar;