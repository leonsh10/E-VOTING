import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.scss';
import logo from '../images/logo.png';

function Nav(){
    const navStyle = {
        color: 'white'
    };
    const votoStyle = {
        border: '1px solid white',
        borderRadius: '15px',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '2px',
    };
    return (
        <nav>
            {/* <img src={logo} class="imageH"/> */}
            <ul className="nav-links">
                <Link style={navStyle} to="/home">
                    <li>Kryefaqja</li>
                </Link>
                <Link style={navStyle} to="/statistikat">
                    <li>Statistikat</li>
                </Link>
                <Link style={navStyle} to="/contactus">
                    <li>Contact Us</li>
                </Link>
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
                <Link style={navStyle} to="/votimi">
                    <li style={votoStyle}>Voto</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;