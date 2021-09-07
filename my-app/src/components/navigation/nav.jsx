import React from 'react';
import { Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { DropdownItem } from 'reactstrap';
import { MenuItem } from 'semantic-ui-react';
import '../../App.scss';
import logo from '../images/logo.png';
import { useStore } from '../users/store';
import UserStore, {userStore} from '../users/userStore';
import { observer } from "mobx-react-lite"
import {Button} from "reactstrap";
import {Nav} from "reactstrap";
observer (function Nav(){
    const {userStore: {user,logout}} = useStore();
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
            <img src={logo} class="imageH"/>
            <ul className="nav-links">
                <Link style={navStyle} to="/home">
                    <li>Kryefaqja</li>
                </Link>
                <Link style={navStyle} to="/statistikat">
                    <li>Statistikat</li>
                </Link>
                <Link style={navStyle} to="/contactus">
                    <li>Kontakti</li>
                </Link>
                <Link style={navStyle} to="/DeputetetBio">
                    <li>Deputetet</li>
                </Link>
                {UserStore.isLoggedIn?(
                    <>
                    <Link style={navStyle} to="/dashboard">
                    <li>Dashboard</li>
                </Link>
                <Link style={navStyle} to="/votimi">
                    <li style={votoStyle}>Voto</li>
                </Link>
                <MenuItem>
                    <Dropdown pointing='right' text={user?.username}/>
                </MenuItem>
                    </>

                ) : (
                    <Button as={Link} onClick={logout} inverted>
                            Logout
                        </Button>
                        
                )}
                
                {/* <Link style={navStyle} to="/login">
                    <li>Login</li>
                </Link>
                <Link style={navStyle} to="/register">
                    <li>Register</li>
                </Link> */}
                <Link style={navStyle} to="/login">
                    <li>Kyçu</li>
                </Link>

                {/* <Link style={navStyle} to="/otherData">
                    <li>Te dhenat</li>
                </Link> */}
                
            </ul>
        </nav>
    )
})

export default Nav;