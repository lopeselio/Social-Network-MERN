import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper white" style={{color: "black"}}>
                <Link to="/home" className="brand-logo left">Social-Network</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/login">Signin</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar

