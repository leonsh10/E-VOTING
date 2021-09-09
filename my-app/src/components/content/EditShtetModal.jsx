import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import "../../App.scss";

export class EditShtetModal extends Component {
    constructor(props) {
      super(props);
      this.state = { shtet: [] };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/Shtetet")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ shtet: data });
          });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:5000/api/Shtetet", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
        shtetet_id: event.target.shtetet_id.value,
      emri_shtetet: event.target.emri_shtetet.value
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
                      <Form.Group controlId="IDShteti">
                        <Form.Label className="labels">IDShteti</Form.Label>
                        <Form.Control
                          type="text"
                          name="shtetet_id"
                          required
                          placeholder="Shteti Id"
                          disabled
                          defaultValue={this.props.shtetet_id}
                          className="form-content2"
                        />
                      </Form.Group>
    
                      <Form.Group controlId="EmriShtetit">
                        <Form.Label className="labels">Emri i Shtetit</Form.Label>
                        <Form.Control
                          type="text"
                          name="emri_shtetet"
                          required
                          defaultValue={this.props.emri_shtetet}
                          placeholder="Emri i Shtetit"
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