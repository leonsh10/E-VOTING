import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import "../../App.scss";

export class EditHomModal extends Component {
  constructor(props) {
    super(props);
    this.state = { homs: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/Home/" + this.props.homid , {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idHome: event.target.idHome.value,
        Titulli: event.target.Titulli.value,
        Content: event.target.Content.value,
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
                  <Form.Group controlId="idHome">
                    <Form.Label className="labels">idHome</Form.Label>
                    <Form.Control
                      type="text"
                      name="idHome"
                      required
                      placeholder="idHome"
                      disabled
                      defaultValue={this.props.homid}
                      className="form-content2"
                    />
                  </Form.Group>

                  <Form.Group controlId="Titulli">
                    <Form.Label className="labels">Titulli</Form.Label>
                    <Form.Control
                      type="text"
                      name="Titulli"
                      required
                      defaultValue={this.props.titulli}
                      placeholder="Titulli"
                      className="form-content2"
                    />
                  </Form.Group>

                  <Form.Group controlId="Content">
                    <Form.Label className="labels">Permbajtja</Form.Label>
                    <Form.Control
                      type="text"
                      name="Content"
                      required
                      defaultValue={this.props.content}
                      placeholder="Content"
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
