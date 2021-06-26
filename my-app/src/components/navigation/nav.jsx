import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.scss';

function Nav(){
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/dashboard">
                    <li>Dashboard</li>
                </Link>
                {/* <Link style={navStyle} to="/login">
                    <li>Login</li>
                </Link>
                <Link style={navStyle} to="/register">
                    <li>Register</li>
                </Link> */}
                <Link style={navStyle} to="/app2">
                    <li>Login</li>
                </Link>

                <Link style={navStyle} to="/otherData">
                    <li>Te dhenat</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;