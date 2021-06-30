import React from "react";

import "../../stili/contactus.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Segment from "react-bootstrap/Button";

class contactus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="divForma">
        <div class="formm">
          <h4>CONTACT US</h4>
          <Form className="forma1">
            <Form.Group>
              {/* <Form.Label>Shkruaj Emrin:</Form.Label> */}
              <Form.Control type="text" placeholder="Emri" />
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Shkruaj Email-in</Form.Label> */}
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Shkruaj Numrin e Telefonit</Form.Label> */}
              <Form.Control type="text" placeholder="Nr.Telefonit" />
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Shkruaj Paqartesite</Form.Label> */}
              <textarea rows="7" cols="60" placeholder="Mesazhi.."></textarea>
            </Form.Group>

            <Button variant="primary" type="submit">
              Dergo Mesazhin
            </Button>
          </Form>
        </div>

        <div class="contactMajte"></div>
        <div class="footerC">
          <p>All rights reserved</p>
        </div>
      </div>
    );
  }
}

export default contactus;
