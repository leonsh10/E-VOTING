import React from "react";

import "../../stili/contactus.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Segment from "react-bootstrap/Button";
import logoK from "../../header-logo.svg";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import logo from '.././images/logo.png';
// import { Alert } from 'reactstrap';
// import {Alert} from 'react-bootstrap/Alert';
class contactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cont: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/Contact")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ regs: data });
      });
  }

  refreshList() {
    fetch("http://localhost:5000/api/Contact")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ regs: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:5000/api/Contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emri: event.target.emri.value,
        email: event.target.email.value,
        nrtelefonit: event.target.nrtelefonit.value,
        mesazhi: event.target.mesazhi.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert("Mesazhi u dergua me sukses");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    return (
      <div class="divContent">
        <div className="logos">
          <img src={logoK} style={{height: '80px'}}></img>
          <p>Republika e Kosovës</p>
        </div>
        <div class="divForma">
          <div class="formm">
            <h4 id="epara">.</h4>
            <form className="forma1" onSubmit={this.handleSubmit}>
              {/* <Form.Label>Shkruaj Emrin:</Form.Label> */}
              <input
                type="text"
                id="inputat"
                class="inputi"
                name="emri"
                size="30"
                placeholder="Emri"
                required
              />

              {/* <Form.Label>Shkruaj Email-in</Form.Label> */}
              <input
                type="email"
                id="inputat"
                class="inputi"
                name="email"
                size="30"
                placeholder="Email"
                required
              />

              {/* <Form.Label>Shkruaj Numrin e Telefonit</Form.Label> */}
              <input
                type="text"
                id="inputat"
                class="inputi"
                name="nrtelefonit"
                size="30"
                placeholder="Nr.Telefonit"
                required
              />

              {/* <Form.Label>Shkruaj Paqartesite</Form.Label> */}
              <textarea
                name="mesazhi"
                rows="7"
                cols="60"
                placeholder="Mesazhi.."
                id="mesazhi"
                required
              ></textarea>

              <button type="submit" className="butoni">
                Dergo Mesazhin
              </button>
            </form>
          </div>

          <div class="contactMajte">
            <div class="njeshi">
              <IoIcons.IoMdLocate class="llogot" id="logoja1" />
              <div class="dyshi" id="e-voting">
                <h4 class="h42">E-VOTING</h4>
                <p id="paraLart" class="poshti">
                  KOSOVA,XK
                </p>
              </div>
            </div>

            <div class="dysh" id="numriT">
              <IoIcons.IoMdCall class="llogot" id="logoja2" />
              <div class="dyshi">
                <h4 class="h42">+38345121212</h4>
              </div>
            </div>

            <div class="tresh">
              <IoIcons.IoMdMail class="llogot" id="logoja3" />
              <div class="dyshi" id="emaila">
                <h4 class="h42">evoting@gmail.com</h4>
              </div>
            </div>

            <div class="vija"></div>

            <div class="llogotSocial">
              <div class="llogotDesign">
                <a href="https://www.facebook.com/">
                  <FaIcons.FaFacebookF class="llogot1" />
                </a>
              </div>
              <div class="llogotDesign">
                <a href="https://www.instagram.com/">
                  <FaIcons.FaInstagram class="llogot1" />
                </a>
              </div>
              <div class="llogotDesign">
                <a href="https://www.twitter.com/">
                  <FaIcons.FaTwitter class="llogot1" />
                </a>
              </div>
              <div class="llogotDesign">
                <a href="https://www.google.com/">
                  <FaIcons.FaGooglePlusG class="llogot1" />
                </a>
              </div>
            </div>

            <p id="posht" class="poshti">
              E-VOTING KOSOVA
            </p>
          </div>
        </div>
        <div class="footerC">
          <img src={logo} class="imageF"></img>
          <i>&copy;</i>
          <p>Republika e Kosovës - Te gjitha te drejtat e rezervuara</p>
      </div>
      </div>
    );
  }
}

export default contactus;
