import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import "../../App.scss";

export class EditVotuesModal extends Component {
    constructor(props) {
      super(props);
      this.state = { votuesit: [] };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/Account/userat")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ shtet: data });
          });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:5000/api/Account/" + this.props.nrLeternjoftimit, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
        Id: event.target.Id.value,
      UserName: event.target.UserName.value,
      // nrLeternjoftimit: event.target.nrLeternjoftimit.value,
      Email: event.target.Email.value
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
                      <Form.Group controlId="ID">
                        <Form.Label className="labels">ID</Form.Label>
                        <Form.Control
                          type="text"
                          name="Id"
                          required
                          placeholder="Id"
                          disabled
                          defaultValue={this.props.Id}
                          className="form-content2"
                        />
                      </Form.Group>
    
                      <Form.Group controlId="UserName">
                        <Form.Label className="labels">Username</Form.Label>
                        <Form.Control
                          type="text"
                          name="UserName"
                          required
                          defaultValue={this.props.UserName}
                          placeholder="Username"
                          className="form-content2"
                        />
                      </Form.Group>

                      {/* <Form.Group controlId="nrLeternjoftimit">
                        <Form.Label className="labels">NrLeternjoftimit</Form.Label>
                        <Form.Control
                          type="text"
                          name="nrLeternjoftimit"
                          required
                          defaultValue={this.props.nrLeternjoftimit}
                          placeholder="Numri Leternjoftimit"
                          className="form-content2"
                        />
                      </Form.Group> */}

                      <Form.Group controlId="Email">
                        <Form.Label className="labels">Email</Form.Label>
                        <Form.Control
                          type="text"
                          name="Email"
                          required
                          defaultValue={this.props.Email}
                          placeholder="Email"
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