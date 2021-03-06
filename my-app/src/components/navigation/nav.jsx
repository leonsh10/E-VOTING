import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DropdownItem } from "reactstrap";
import { MenuItem, Menu } from "semantic-ui-react";
import "../../App.scss";
import logo from "../images/logo.png";
import { useStore } from "../users/store";
import UserStore, { userStore } from "../users/userStore";
import { observer } from "mobx-react-lite";
import { Button } from "reactstrap";
import { useHistory } from "react-router";
// import {Nav} from "reactstrap";
export default observer(function Nav() {
  //    var history = useHistory();

  const {
    userStore: { user, logout },
  } = useStore();
  const navStyle = {
    color: "white",
  };

  const { userStore } = useStore();
  const votoStyle = {
    border: "1px solid white",
    borderRadius: "15px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "2px",
  };

  const logInStyle = {
      float: 'right'
  }

  const logOutStyle = {
    background: "transparent",
    border: "none",
  };
  return (
    <nav>
      <img src={logo} className="imageH" />
      <ul className="nav-links ul">
        {/* <Link style={navStyle} to="/RegisterForm">
                    <li>Register</li>
                </Link> */}
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

        {userStore.isLoggedIn && (userStore.user.nrLeternjofimit.startsWith('0') && userStore.user.nrLeternjofimit.endsWith('0')) ? (
          <>
            <Link style={navStyle} to="/dashboard">
              <li>Dashboard</li>
            </Link>
          </>
        ) : (
          <Link to="/" style={{display: 'none'}}></Link>
        )}


        {userStore.isLoggedIn ? (
          <>
            <Link style={navStyle} to="/votimi">
              <li style={votoStyle}>Voto</li>
            </Link>

            <Button
              onClick={logout}
              style={logOutStyle}
              className="logOutButton"
            >
              Logout
            </Button>
          </>
        ) : (
          <Link style={navStyle} to="/login">
            <li style={{}}>Ky??u</li>
          </Link>
        )}

        

        {/* <Menu.Item position='left'>
                    <Dropdown.Item onClick={logout} text="Logout"></Dropdown.Item>
                    </Menu.Item>  */}

        {/* <Link style={navStyle} to="/otherData">
                    <li>Te dhenat</li>
                </Link> */}
      </ul>
    </nav>
  );
});

// export default Nav;
