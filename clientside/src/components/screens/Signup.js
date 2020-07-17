import React from 'react'

const Signup = () => {
    return (
        <div className="mycard">
            <div className="card authcard input-field">
                <h2>Social Network</h2>
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="btn waves-effect waves-light #7b1fa2 purple darken-2">Signup</button>
            </div>
        </div>
    )
}

export default Signup