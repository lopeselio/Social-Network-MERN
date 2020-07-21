import React,{ useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const fetch = require("node-fetch")
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const postData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid email", classes: "#b71c1c red darken-4"})
            return
        }
        fetch("/signup",{
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error){
                M.toast({html: data.error, classes:"#c51162 pink accent-4"})
            }
            else{
                M.toast({html: data.message, classes:"#69f0ae green accent-2"})
                history.push('/login')
            }
            }
        )
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