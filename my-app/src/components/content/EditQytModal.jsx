import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import "../../App.scss";

export class EditQytModal extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/Shtetet")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/Qyteti", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        IDQyteti: event.target.IDQyteti.value,
        EmriQytetit: event.target.EmriQytetit.value,
        Shteti: event.target.Shteti.value,
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
                  <Form.Group controlId="IDQyteti">
                    {/* <Form.Label>IDQyteti</Form.Label> */}
                    <Form.Control
                      type="text"
                      name="IDQyteti"
                      required
                      placeholder="IDQyteti"
                      disabled
                      defaultValue={this.props.qyid}
                      className="form-content2"
                    />
                  </Form.Group>

                  <Form.Group controlId="EmriQytetit">
                    {/* <Form.Label>EmriQytetit</Form.Label> */}
                    <Form.Control
                      type="text"
                      name="EmriQytetit"
                      required
                      defaultValue={this.props.qytemri}
                      placeholder="EmriQytetit"
                      className="form-content2"
                    />
                  </Form.Group>

                  <Form.Group controlId="Shteti">
                    {/* <Form.Label>Shteti</Form.Label> */}
                    <Form.Control as="select" defaultValue={this.props.shteti} className="form-content2">
                      {this.state.deps.map((dep) => (
                        <option key={dep.shtetet_id}>
                          {dep.emri_shtetet}
                        </option>
                      ))}
                      {/* <option>Kosove</option>
                      <option>Shqiperi</option> */}
                    </Form.Control>
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
