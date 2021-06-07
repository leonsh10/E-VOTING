import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import "../../App.scss";

export class AddQytModal extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // event.preventDefault();
    fetch("http://localhost:5000/api/Shtetet")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/Qyteti", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // IDQyteti:null,
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
      <div className="addQytet">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header clooseButton>
            {/* <Modal.Title id="contained-modal-title-vcenter">
              Shto Qytetin
            </Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <Row>
              {/* <Col sm={6}> */}
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="EmriQytetit">
                    {/* <Form.Label>EmriQytetit</Form.Label> */}
                    <Form.Control
                      type="text"
                      name="EmriQytetit"
                      required
                      placeholder="Emri i Qytetit"
                      className="form-content2"
                    />
                  </Form.Group>

                  <Form.Group controlId="Shteti">
                    {/* <Form.Label>Shteti</Form.Label> */}
                    <Form.Control as="select" className="form-content2">
                      {this.state.deps.map((dep) => (
                        <option key={dep.shtetet_id}>
                          {dep.emri_shtetet}
                        </option>
                      ))}
                      {/* <option>Kosove</option>
                      <option>Shqiperi</option>
                      <option>Angli</option>
                      <option>Amerike</option>
                      <option>Austri</option>
                      <option>Gjermani</option> */}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit" className="shto-btnD">
                      Shto
                    </Button>
                    <Button variant="danger" onClick={this.props.onHide}>
                      Mbyll
                    </Button>
                  </Form.Group>
                </Form>
                {/* <Form
                  onSubmit={this.handleSubmit}
                  style={{
                    backgroundColor: "#15181f",
                    justifyContent: "center",
                  }}
                >
                  <Form.Row>
                  <Form.Group controlId="Shteti">
                    <Form.Control
                      as="select"
                      size="lg"
                      className="form-content2"
                    >
                      {this.state.regs.map((sht) => (
                        <option key={sht.shtetet_id}>{sht.emri_shtetet}</option>
                      ))}
                      <option>Kosove</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="EmriQytetit">
                    <Form.Control
                      size="lg"
                      type="text"
                      name="EmriMbiemri"
                      placeholder="Emri Qytetit..."
                      className="form-content2"
                    />
                    </Form.Group
                    <div className="buton-div">
                    
                      <Button
                        variant="primary"
                        type="submit"
                        className="shto-btnD"
                        onClick={this.handleSubmit}
                      >
                        Shto
                      </Button>
                      <Button variant="danger" onClick={this.props.onHide}>
                        Mbyll
                      </Button>
                      
                    </div>
                  </Form.Row>
                </Form> */}
              {/* </Col> */}
            </Row>
          </Modal.Body>

          {/* <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Mbyll
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}
