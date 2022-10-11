import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/estatery.png'
import { useLocation } from 'react-router-dom';
import './index.css'

const Navbar: React.FC = () => {

    const {pathname} = useLocation()

    return (
    <nav className="navbar">
        <div className='nav-wrapper'>
            <div className='logo'>
                <Link to="/"><img src={Logo} alt="logo of the company" /></Link>
            </div>
            <div className='tabs'>
                <ul className='tablist'>
                    <Link className={`tabitem ${pathname === "/"?'selected':''}`} to="/"><li className="link" >Rent</li></Link>
                    <Link className={`tabitem ${pathname === "/favs"?'selected':''}`} to="/favs"><li className="link" >Favourites</li></Link>
                </ul>
            </div>
            <div className='auth'>
                <button className='authbtn login'>Login</button>
                <button className='authbtn signup'>Sign Up</button>
            </div>
        </div>
    </nav>
    )
}

export default Navbar