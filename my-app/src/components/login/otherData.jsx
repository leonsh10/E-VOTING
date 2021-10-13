import React from "react";
import { Modal, Row, Col, Form } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./otherData.scss";

export class otherData extends React.Component {
  render() {
    return (
      <div id="forma">
        <Form id="forma1">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Emri</Form.Label>
            <Form.Control
              type="text"
              placeholder="Shkruaj Emrin"
              className="form__field"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mbiemri</Form.Label>
            <Form.Control type="text" placeholder="Shkruaj Mbiemrin" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Numri i Leternjoftimit</Form.Label>
            <Form.Control
              type="text"
              placeholder="Shkruaj Numrin e Leternjoftimit"
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          {/* <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group> */}

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Qyteti</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Shteti</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>

          {/* <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

          <Button variant="primary" type="submit">
            Confirm
          </Button>
        </Form>
      </div>
    );
  }
}

export default otherData;
