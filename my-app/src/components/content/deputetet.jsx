import React from 'react';
import '../../App.scss';
import {Button, ButtonToolbar, Form, Row, Col} from 'react-bootstrap';


function deputetet() {
    return (
      <div className="deputetetContent">
        <ButtonToolbar>
          <Button className="mb-2 shtoBtn" variant="secondary" size="lg">
            +SHTO DEPUTET
          </Button>
          <Button className="mb-2 shtoBtn" variant="secondary" size="lg">
            -FSHIJ DEPUTET
          </Button>
        </ButtonToolbar>
        <div className="forma">
          <Form>
            <Form.Row>
              {/* <Form.Control as="select" size="lg" className="form-content"> */}
              <Form className="forma1">
              <select class="form-content2">
                <option>Zgjedh Partine </option>
                <option>VV</option>
                <option>PDK</option>
                <option>LDK</option>
                <option>AAK</option>
                <option>AKR</option>
                </select>
              {/* </Form.Control> */}

              <input type="text" id="inputi" class="form-content2" placeholder="Emri dhe Mbiemri"></input>

              <select class="form-content2">
                <option>Zgjedh numrin</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
           
              <div className="buton-div">
              
                <Button variant="primary" type="submit" className="shto-btnD">
                  Shto 
                </Button>
                
              </div>
              </Form>
            </Form.Row>
          </Form>
        </div>
      </div>
    );
}

export default deputetet
