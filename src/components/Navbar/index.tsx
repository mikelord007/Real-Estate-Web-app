import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/estatery.png'
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './index.css'

const Navbar: React.FC = () => {

    const {pathname} = useLocation()

    const [sliderActive, setsliderActive] = useState<boolean>(false)

    return (
    <>
        <nav className="navbar">
            <div className='nav-wrapper'>
                <div className='logo'>
                    <Link to="/"><img src={Logo} className="logo-img" alt="logo of the company" loading="eager"/></Link>
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
                <button className="nav-bar-toggle" onClick={() => setsliderActive(!sliderActive)}>
                    <GiHamburgerMenu className='nav-bar-hamburger'/>
                </button>
            </div>
            <div className={`nav-slider ${sliderActive?'active':''}`}>
                <ul className='responsive-tabs'>
                    <li className='tabitem'><Link to="/">Rent</Link></li>
                    <li className='tabitem separator'/>
                    <li className='tabitem'><Link to="/favs">Favourites</Link></li>
                    <li className='tabitem separator'/>
                    <li className='tabitem buttons'>
                        <button className='authbtn loginbtn'>Login</button>
                        <button className='authbtn loginbtn'>Sign Up</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default Navbar