import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper white" style={{color: "black"}}>
                <a href="#" className="brand-logo left">Logo</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="sass.html">Login</a></li>
                    <li><a href="badges.html">Profile</a></li>
                    <li><a href="collapsible.html">Signup</a></li>
                </ul>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar

