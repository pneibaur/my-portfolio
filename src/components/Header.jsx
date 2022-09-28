import React from 'react'
import { Link } from "react-router-dom"

const Header = (props) => {
    const navStyle = {
        display: "flex",
        justifyContent: "flex-start",
        padding: "8px",
        width: "90%",
        margin: "auto",
    }
    const divNavStyle = {
        padding: "0 10px",
        margin: "0 5px",
    }
    return (
        <header>
            <nav style={navStyle}>
                <Link className='link' to="/">
                    <div className='nav' style={divNavStyle}>HOME</div>
                </Link >
                <Link className='link' to="/about">
                    <div className='nav' style={divNavStyle}>ABOUT</div>
                </Link>
                <Link className='link' to="/projects">
                    <div className='nav' style={divNavStyle}>PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header