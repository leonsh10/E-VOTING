import React,{Component} from 'react';
import '../../App.scss';
import {Button, ButtonToolbar, Form, Row, Col, Table} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import logo from '.././images/logo.png';

export class votimi extends Component{


render(){
    return(
      <div class="votePage">
        <Row>
          <Form className="voteForm">
            <Form.Group controlId="partia">
              <Form.Label className="formLabels">Zgjedh Partine</Form.Label>
              <Form.Control
                as="select" className="voteOption"
                name="partia"
              >
                <option className="formOptions">VV</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="partia">
              <Form.Label className="formLabels">Deputeti 1</Form.Label>
              <Form.Control
                as="select" className="voteOption"
                name="partia"
              >
                <option>1</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="partia">
              <Form.Label className="formLabels">Deputeti 2</Form.Label>
              <Form.Control
                as="select" className="voteOption"
                name="partia"
              >
                <option>1</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="partia">
              <Form.Label className="formLabels">Deputeti 3</Form.Label>
              <Form.Control
                as="select" className="voteOption"
                name="partia"
              >
                <option>1</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="partia">
              <Form.Label className="formLabels">Deputeti 4</Form.Label>
              <Form.Control
                as="select" className="voteOption"
                name="partia"
              >
                <option>1</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="partia">
              <Form.Label className="formLabels">Deputeti 5</Form.Label>
              <Form.Control
                as="select" className="voteOption"
                name="partia"
              >
                <option>1</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="partia">
              <Button variant="primary" type="submit" className="vote-btn"> Voto
              </Button>
            </Form.Group>
          </Form>
        </Row>
        <div class="footerV">
          <img src={logo} class="image"></img>
            <i>&copy;</i>
          <p>Te gjitha te drejtat e rezervuara</p>
        </div>
      </div>
    )
}

}

export default votimi