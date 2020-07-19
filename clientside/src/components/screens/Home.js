import React from 'react'

const Home = () => {
    return (
        <div className="home">
            <h5>Elio</h5>
            <div className="card-image">
                <img src="https://images.unsplash.com/photo-1568194157720-8bbe7114ebe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="card-content">
                <h6>Title</h6>
                <p>This is an amazing post</p>
                <input type="text" placeholder="add a comment" />
            </div>
        </div>
    )
}

export default Home