import React from 'react';
import '../../App.scss';
import {Button, ButtonToolbar, Form, Row, Col} from 'react-bootstrap';

function qytetet() {
    return (
        <div className="deputetetContent">
          <ButtonToolbar>
            <Button className="mb-2" variant="secondary" size="lg">
              +SHTO QYTET
            </Button>
            <Button className="mb-2" variant="secondary" size="lg">
              -FSHIJ QYTET
            </Button>
          </ButtonToolbar>
          <div className="forma">
            <Form>
              <Form.Row>
                <Form.Control as="select" size="lg" className="form-content">
                    <option>Zgjedh Shtetin</option>
                    <option>Kosove</option>
                    <option>Shqiperi</option>
                    <option>Gjermani</option>
                    <option>Austri</option>
                    <option>Angli</option>
                </Form.Control>
                <Form.Control
                  size="lg"
                  type="text"
                  name="EmriMbiemri"
                  placeholder="Emri dhe mbiemri.."
                  className="form-content"
                />
              </Form.Row>
            </Form>
          </div>
        </div>
      );
}

export default qytetet
