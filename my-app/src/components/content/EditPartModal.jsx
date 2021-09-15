import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import "../../App.scss";

export class EditPartModal extends Component {
  constructor(props) {
    super(props);
    this.state = { part: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/Partit")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/Partit/" + this.props.partit_id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       partit_id: event.target.partit_id.value,
      emri_Partis: event.target.emri_Partis.value
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
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="IDPartise">
                    <Form.Label className="labels">ID e Partise</Form.Label>
                    <Form.Control
                      type="text"
                      name="partit_id"
                      required
                      placeholder="Id_Partia"
                      disabled
                      defaultValue={this.props.partit_id}
                      className="form-content2"
                    />
                  </Form.Group>

                  <Form.Group controlId="EmriPartise">
                    <Form.Label className="labels">Partia</Form.Label>
                    <Form.Control
                      type="text"
                      name="emri_Partis"
                      required
                      defaultValue={this.props.emri_Partis}
                      placeholder="Emri i Partise"
                      className="form-content2"
                    />
                  </Form.Group>

              
                  <Form.Group>
                    <Button variant="primary" type="submit" className="shto-btnD">
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
