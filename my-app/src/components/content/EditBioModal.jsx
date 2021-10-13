import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "../../App.scss";

// import {Modal} from "react-bootstrap/Modal";
// import Modal from 'react-bootstrap/Modal'
// import {Button} from "react-bootstrap";

export class EditBioModal extends Component {
  constructor(props) {
    super(props);
    this.state = { depu: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //
  componentDidMount() {
    fetch("http://localhost:5000/api/Biografi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ depu: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/Biografi/" + this.props.IDBiografi, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        IDBiografi: event.target.IDBiografi.value,
        Emri: event.target.Emri.value,
        Mbiemri: event.target.Mbiemri.value,
        Partia: event.target.Partia.value,
        Biografia: event.target.Biografia.value,
        nrMandateve: event.target.nrMandateve.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert("Deputeti u editua me sukses");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          // style={{opacity:1}}
          fade={false}
        >
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="IDBiografi">
                    <Form.Label className="labels">IDBiografi</Form.Label>
                    <Form.Control
                      type="text"
                      name="IDBiografi"
                      // required
                      placeholder="Deputeti Id"
                      disabled
                      defaultValue={this.props.IDBiografi}
                      className="form-content2"
                    />
                  </Form.Group>

                  <Form.Group controlId="Emri">
                    <Form.Label className="labels">Emri</Form.Label>
                    <Form.Control
                      type="text"
                      name="Emri"
                      required
                      defaultValue={this.props.Emri}
                      placeholder="Emri"
                      className="form-content2"
                    />
                  </Form.Group>

                  <Form.Group controlId="Mbiemri">
                    <Form.Label className="labels">Mbiemri</Form.Label>
                    <Form.Control
                      type="text"
                      name="Mbiemri"
                      required
                      defaultValue={this.props.Mbiemri}
                      placeholder="Mbiemri"
                      className="form-content2"
                    />
                  </Form.Group>

                  <Form.Group controlId="Partia">
                    <Form.Label className="labels">Partia</Form.Label>
                    <Form.Control
                      type="text"
                      name="Partia"
                      required
                      defaultValue={this.props.Partia}
                      placeholder="Partia"
                      className="form-content2"
                    />
                  </Form.Group>

                  <Form.Group controlId="Biografia">
                    <Form.Label className="labels">Biografia</Form.Label>
                    <Form.Control
                      type="text"
                      name="Biografia"
                      required
                      defaultValue={this.props.Biografia}
                      placeholder="Biografia"
                      className="form-content2"
                    />
                  </Form.Group>

                  {/* <Form.Group controlId="nrMandateve">
                        <Form.Label className="labels">Numri I Mandateve</Form.Label>
                        <select class="form-content2" name="nrMandateve" >
                            <option >Zgjedh numrin</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>

                    </Form.Group> */}

                  <Form.Group controlId="nrMandateve">
                    <Form.Label className="labels">
                      Numri i Mandateve
                    </Form.Label>
                    <Form.Control
                      as="Select"
                      name="nrMandateve"
                      className="form-content2"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="shto-btnD"
                    >
                      Update
                    </Button>
                    <Button variant="danger" onClick={this.props.onHide}>
                      Close
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          {/* <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>
                  Close
                </Button>
              </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}
