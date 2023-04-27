import React, { useState } from 'react'
import { Link } from "react-router-dom"


const links = [
    {
        label: "HOME",
        to: "/"
    },
    {
        label: "ABOUT ME",
        to: "/about"
    },
    {
        label: "SKILLS",
        to: "/skills"
    },
    {
        label: "RESUME",
        to: "/resume"
    },
    {
        label: "PROJECTS",
        to: "/projects"
    },
    {
        label: "CONTACT",
        to: "/contact"
    },


]
const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    return (
        <div>
            <nav className='navbar'>

                <div className='navbar-container-logo'>
                    <Link to="/" className='nav-logo'>
                         <h2>logo</h2>
                    </Link>
                </div>

                <div className='navbar-container-menu'>
                    <ul>
                        {links.map((item) =>
                            <li className='navbar-container-menu-item'>
                                <Link to={item.to} className="nav-links">
                                    {item.label}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                
            </nav>
        </div>
    )
}

export default Navbar