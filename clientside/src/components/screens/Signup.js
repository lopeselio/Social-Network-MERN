import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const fetch = require("node-fetch")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const postData = () => {
        fetch("/signup",{
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name: "",
                email: "",
                password: ""
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error){
                M.toast({html: data.error})

            }
        })
    }

    return (
        <div className="mycard">
            <div className="card authcard input-field">
                <h2>Social Network</h2>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn waves-effect waves-light #7b1fa2 purple darken-2" onClick={()=> postData()}>Signup</button>
                <h5>
                    <Link to="/login">Already have an Account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup