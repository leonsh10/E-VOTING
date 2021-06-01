import React from 'react';
import '../../App.scss';
import {Button, ButtonToolbar, Form, Row, Col, Table} from 'react-bootstrap';

function qytetet() {
    return (
        <div className="deputetetContent">
          <h1 class="titulliLart">Qytetet</h1>
          {/* <ButtonToolbar>
            <Button className="mb-2" variant="secondary" size="lg">
              +SHTO QYTET
            </Button>
            <Button className="mb-2" variant="secondary" size="lg">
              -FSHIJ QYTET
            </Button>
          </ButtonToolbar> */}
          <div className="forma">
            <Form>
              <Form.Row>
                <Form.Control as="select" size="lg" className="form-content2">
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
                  placeholder="Emri Qytetit..."
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

export default qytetet
