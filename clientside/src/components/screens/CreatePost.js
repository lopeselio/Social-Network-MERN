import React from 'react'

const CreatePost = () => {
    return (
        <div className="card input-field"
        style={{
            margin: "10px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center"
        }}>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="body" />
            <div className="file-field input-field">
                <div className="btn #ea80fc purple accent-1">
                    <span>Add Picture</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light #7b1fa2 purple darken-2">Submit Post</button>


        </div>
    )
}

export default CreatePost