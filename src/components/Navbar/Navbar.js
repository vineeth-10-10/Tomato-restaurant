import './Navbar.css';
import {assets} from '../../assets/assets';
import { useState } from 'react';

const Navbar = () =>{
    const [menu,setMenu] = useState("Home");

    return(
        <div className='navbar'>
           <img src={assets.logo} alt="logo" className='logo'/>
           <ul className='navbar-menu'>
            <li onClick={()=>setMenu("Home")} className={menu === "Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("Menu")} className={menu === "Menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("Contact-Us")} className={menu === "Contact-Us"?"active":""}>Contact-Us</li>
           </ul>
           <div className='navbar-right'>
            <img src={assets.search_icon} alt="search icon" />
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon} alt="" />
                <div className='dot'></div>
            </div>
            <button>Sign-in</button>
           </div>
        </div>
    )
}

export default Navbar;