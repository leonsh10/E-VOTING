import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import "../../App.scss";

export class EditDepModal extends Component {
    constructor(props) {
      super(props);
      this.state = { depu: [] ,part:[]};
      this.handleSubmit = this.handleSubmit.bind(this);
    }
//
    componentDidMount() {
        fetch("http://localhost:5000/api/Deputetet")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ depu: data });
          });
      }

      componentDidMount(){
        fetch('http://localhost:5000/api/Partit')
        .then(response=>response.json())
        .then(data2=>{
            this.setState({part:data2});
        });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:5000/api/Deputetet", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          deputetet_id: event.target.deputetet_id.value,
          Partia: event.target.Partia.value,
          Emri: event.target.Emri.value,
          Numri: event.target.Numri.value
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
                      <Form.Group controlId="ID_Deputeti">
                        {/* <Form.Label>IDQyteti</Form.Label> */}
                        <Form.Control
                          type="text"
                          name="deputetet_id"
                          required
                          placeholder="Deputeti Id"
                          disabled
                          defaultValue={this.props.deputetet_id}
                          className="form-content2"
                        />
                      </Form.Group>
    
                      <Form.Group controlId="Partit">
                        <Form.Label>Partite</Form.Label>
                        <Form.Control as="select" name="Partia">
                        {this.state.part.map(par=>
                            <option key={par.partit_id}>{par.emri_Partis}</option>)}
                        </Form.Control>
                    </Form.Group>

                      <Form.Group controlId="Emri">
                        {/* <Form.Label>EmriQytetit</Form.Label> */}
                        <Form.Control
                          type="text"
                          name="Emri"
                          required
                          defaultValue={this.props.Emri}
                          placeholder="Emri"
                          className="form-content2"
                        />
                      </Form.Group>

                      <Form.Group controlId="Numri">
                    <Form.Label>Numri I Deputetit</Form.Label>
                    <select class="form-content2" name="Numri" >
                <option >Zgjedh numrin</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>

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