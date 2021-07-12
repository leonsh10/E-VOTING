import React, { Component } from "react";
import {Button, Row, Col, Form,Image} from 'react-bootstrap';

export class biografiDep extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);
  }

  photofilename = "anonymous.png";
  imagesrc = process.env.REACT_APP_PHOTOPATH + this.photofilename;

  componentDidMount() {
    fetch("http://localhost:5000/api/Biografi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/Biografi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //IDBiografi:null,
        PhotoFileName: this.photofilename,
        Emri: event.target.Emri.value,
        Mbiemri: event.target.Mbiemri.value,
        Partia: event.target.Partia.value,
        Biografia: event.target.Biografia.value,
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

  handleFileSelected(event) {
    event.preventDefault();
    this.photofilename = event.target.files[0].name;
    const formData = new FormData();
    formData.append(
      "myFile",
      event.target.files[0],
      event.target.files[0].name
    );

    fetch("http://localhost:5000/api/Biografi/SaveFile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.imagesrc = process.env.REACT_APP_PHOTOPATH + result;
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    return (
      <div className="deputetetContent">
          <h1 class="titulliLart">Biografia e Deputeteve</h1>
            <Row>
              <Col sm={6}>
                {/* <Form onSubmit={this.handleSubmit}> */}
                <Form className="forma1" onSubmit={this.handleSubmit}>
                    <label for="foto">Fotografia e deputetit</label>
                    <Image name="foto" width="200px" height="200px" src={this.imagesrc} />
                    <input onChange={this.handleFileSelected} type="File" />
                  <Form.Group controlId="Emri">
                    <Form.Label>Emri i Deputetit</Form.Label>
                    <Form.Control
                      type="text"
                      name="Emri"
                      required
                      placeholder="Emri Deputetit"
                    />
                  </Form.Group>

                  <Form.Group controlId="Mbiemri">
                  <Form.Label>Mbiemri i Deputetit</Form.Label>
                    <Form.Control
                      type="text"
                      name="Mbiemri"
                      required
                      placeholder="Mbiemri Deputetit"
                    />
                  </Form.Group>

                  <Form.Group controlId="Partia">
                  <Form.Label>Partia</Form.Label>
                    <Form.Control
                      type="text"
                      name="Partia"
                      required
                      placeholder="Partia"
                    />
                  </Form.Group>
                  <Form.Group controlId="Biografia">
                  <Form.Label>Biografia</Form.Label>
                    <Form.Control
                      type="text"
                      name="Biografia"
                      required
                      placeholder="Biografia"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Button variant="primary" type="submit" className="shto-btnD">
                      Shto
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
      </div>
    );
  }
}

export default biografiDep;
