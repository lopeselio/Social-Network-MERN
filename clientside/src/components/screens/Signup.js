import React,{ useState } from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="mycard">
            <div className="card authcard input-field">
                <h2>Social Network</h2>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn waves-effect waves-light #7b1fa2 purple darken-2">Signup</button>
                <h5>
                    <Link to="/login">Already have an Account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup