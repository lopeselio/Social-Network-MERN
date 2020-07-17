import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="mycard">
            <div className="card authcard input-field">
                <h2>Social Network</h2>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="btn waves-effect waves-light #7b1fa2 purple darken-2">Login</button>
                <h5>
                    <Link to="/signup">Don't have an Account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Login