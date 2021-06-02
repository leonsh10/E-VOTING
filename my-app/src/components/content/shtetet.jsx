import React from 'react';
import '../../App.scss';
import {Button, ButtonToolbar, Form, Row, Col, Table} from 'react-bootstrap';

function shtetet() {
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Shtetet</h1>
        {/* <ButtonToolbar>
            <Button className="mb-2" variant="secondary" size="lg">
              +SHTO SHTET
            </Button>
            <Button className="mb-2" variant="secondary" size="lg">
              -FSHIJ SHTET
            </Button>
          </ButtonToolbar> */}
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
        <Table className="tableData">
          <thead>
            <tr>
              <th>Test</th>
              <th>Test</th>
              <th>Test</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              Test
              <td>Test</td>
              <td>Test</td>
              <td>
                <ButtonToolbar>
                  <Button
                    className="info"
                    variant="info"
                  >
                    Edit
                  </Button>

                  <Button
                    className="danger"
                    variant="danger"
                  >
                    Delete
                  </Button>

                </ButtonToolbar>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}

export default shtetet
