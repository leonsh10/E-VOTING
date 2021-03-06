// import React from "react";
import React, { Component } from "react";
import loginImg from "../../login.svg";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddRegModal } from "./AddRegModal";
import { Modal, Row, Col, Form } from "react-bootstrap";
import { EditRegModal } from "./EditRegModal";
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { regs: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/Register")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ regs: data });
      });
  }

  refreshList() {
    fetch("http://localhost:5000/api/Register")
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

    fetch("http://localhost:5000/api/Register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: event.target.username.value,
        nrLeternjoftimit: event.target.nrLeternjoftimit.value,
        email: event.target.email.value,
        Password: event.target.Password.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    const { votuesi_id, username, nrLeternjoftimit, email, Password } =
      this.state;
    return (
      <div className="base-container" ref={this.props.conatinerRef}>
        <div className="header">Regjistrohu</div>
        <Form onSubmit={this.handleSubmit}>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>

            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Emri Dhe Mbiemri</label>

                <input
                  className="username"
                  type="text"
                  name="username"
                  class="inputt"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="nrleternjoftimit">Numri i Leternjoftimit</label>
                <input
                  className="nrLeternjoftimit"
                  type="text"
                  name="nrLeternjoftimit"
                  class="inputt"
                  id="nrLeternjoftimit"
                  placeholder="Numri i Leternjoftimit"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="email"
                  type="text"
                  name="email"
                  id="email"
                  class="inputt"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="Password"
                  type="password"
                  name="Password"
                  id="Password"
                  class="inputt"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer">
              <button type="submit" className="btn">
                Regjistrohu
              </button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
