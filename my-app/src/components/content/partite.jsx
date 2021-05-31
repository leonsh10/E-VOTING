import React from 'react';
import '../../App.scss';
import {Button, ButtonToolbar, Form, Row, Col} from 'react-bootstrap';

function partite() {
    return (
        <div className="deputetetContent">
          <ButtonToolbar>
            <Button className="mb-2" variant="secondary" size="lg">
              +SHTO SUBJEKT
            </Button>
            <Button className="mb-2" variant="secondary" size="lg">
              -FSHIJ SUBJEKT
            </Button>
          </ButtonToolbar>
          <div className="forma">
            <Form>
              <Form.Row>
                
                <Form.Control
                  size="lg"
                  type="text"
                  name="EmriMbiemri"
                  placeholder="Partia..."
                  className="form-content"
                />
              </Form.Row>
            </Form>
          </div>
        </div>
      );
}

export default partite
