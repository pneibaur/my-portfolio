import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="main">
            <h1 className='title'>Welcome to my super awesome portfolio!</h1>
            <img className='banner' src="https://i.imgur.com/qkJU5nh.jpg" alt="Utah Tech" />
            <h3 className='subtitle'>Checkout my projects!</h3>
            <button><Link className='link' to="/projects">MY STUFF</Link></button>
        </div>
    )
}

export default Home