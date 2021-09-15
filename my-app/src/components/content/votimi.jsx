import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
// import {Link} from 'react-router-dom';
import logo from ".././images/logo.png";
export class votimi extends Component {

  constructor(props) {
    super(props);
    this.state = { part: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/Partit")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ part: data });
      });
  }

  refreshList() {
    fetch("http://localhost:5000/api/Votimi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ regs: data });
      });
  }

  componentDidUpdate() {
    this.refreshList();
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:5000/api/Votimi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // IDVota: event.target.IDVota.value,
        Partia: event.target.Partia.value,
        DeputetiPare: event.target.DeputetiPare.value,
        DeputetiDyte: event.target.DeputetiDyte.value,
        DeputetiTrete: event.target.DeputetiTrete.value,
        DeputetiKatert: event.target.DeputetiKatert.value,
        DeputetiPeste: event.target.DeputetiPeste.value,
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
    return (
      <div class="votePage">
        <div id="vijaLv"></div>
        <Row className="rreshti">
          <Form className="voteForm" onSubmit={this.handleSubmit}>
            <Form.Group controlId="Partia">
              <Form.Label className="formLabels">Zgjedh Partine</Form.Label>
              {/* <Form.Control as="select" className="voteOption" name="Partia">
                {this.state.part.map((par) => (
                  <option key={par.partit_id}>{par.emri_Partis}</option>
                ))}
              </Form.Control> */}
              <Form.Control as="select" name="Partia" className="voteOption">
                {this.state.part.map(par=>
                  <option key={par.partit_id}>{par.emri_Partis}</option>
                )}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="DeputetiPare">
              <Form.Label className="formLabels">Deputeti 1</Form.Label>
              <Form.Control as="select" className="voteOption" name="DeputetiPare">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>...</option>
                <option>120</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="DeputetiDyte">
              <Form.Label className="formLabels">Deputeti 2</Form.Label>
              <Form.Control as="select" className="voteOption" name="DeputetiDyte">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>...</option>
                <option>120</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="DeputetiTrete">
              <Form.Label className="formLabels">Deputeti 3</Form.Label>
              <Form.Control as="select" className="voteOption" name="DeputetiTrete">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>...</option>
                <option>120</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="DeputetiKatert">
              <Form.Label className="formLabels">Deputeti 4</Form.Label>
              <Form.Control as="select" className="voteOption" name="DeputetiKatert">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>...</option>
                <option>120</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="DeputetiPeste">
              <Form.Label className="formLabels">Deputeti 5</Form.Label>
              <Form.Control as="select" className="voteOption" name="DeputetiPeste">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>...</option>
                <option>120</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="buton">
              <Button variant="primary" type="submit" className="vote-btn" name="buton">
                {" "}
                Voto
              </Button>
            </Form.Group>
          </Form>
        </Row>
        <div class="footerS">
          <img src={logo} class="imageF"></img>
          <i>&copy;</i>
          <p>Republika e Kosovës - Te gjitha te drejtat e rezervuara</p>
        </div>
      </div>
    );
  }
}

export default votimi;
