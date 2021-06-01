import React from 'react';
import '../../App.scss';
import {Button, ButtonToolbar, Form, Row, Col} from 'react-bootstrap';

function shtetet() {
    return (
        <div className="deputetetContent">
          <ButtonToolbar>
            <Button className="mb-2" variant="secondary" size="lg">
              +SHTO SHTET
            </Button>
            <Button className="mb-2" variant="secondary" size="lg">
              -FSHIJ SHTET
            </Button>
          </ButtonToolbar>
          <div className="forma">
            <Form>
              <Form.Row>
                <Form.Control
                  size="lg"
                  type="text"
                  name="EmriMbiemri"
                  placeholder="Shteti..."
                  className="form-content2"
                />
                <div className="buton-div">
                  <Button variant="primary" type="submit" className="shto-btnD">
                    Shto
                  </Button>
                </div>
              </Form.Row>
            </Form>
          </div>
        </div>
      );
}

export default shtetet
