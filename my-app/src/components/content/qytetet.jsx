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
        {/* <Table className="tableData">
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
        </Table> */}
        <table className="tabela">
          <tr>
            <th className="tabelaHD">IDQyteti</th>
            <th className="tabelaHD">Shteti</th>
            <th className="tabelaHD">EmriQytetit</th>
            <th className="tabelaHD">Opsionet</th>
          </tr>
          <tr>
            <td className="tabelaHD">1</td>
            <td className="tabelaHD">Kosove</td>
            <td className="tabelaHD">Prishtine</td>
            <td className="tabelaHD">
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
          <tr>
            <td className="tabelaHD">2</td>
            <td className="tabelaHD">Angli</td>
            <td className="tabelaHD">Londer</td>
            <td className="tabelaHD">
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
          <tr>
            <td className="tabelaHD">3</td>
            <td className="tabelaHD">Austri</td>
            <td className="tabelaHD">Viena</td>
            <td className="tabelaHD">
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
          <tr>
            <td className="tabelaHD">4</td>
            <td className="tabelaHD">Amerike</td>
            <td className="tabelaHD">New York</td>
            <td className="tabelaHD">
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
          <tr>
            <td className="tabelaHD">5</td>
            <td className="tabelaHD">France</td>
            <td className="tabelaHD">Paris</td>
            <td className="tabelaHD">
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
          <tr>
            <td className="tabelaHD">6</td>
            <td className="tabelaHD">Gjermani</td>
            <td className="tabelaHD">Munich</td>
            <td className="tabelaHD">
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
        </table>
      </div>
    );
}

export default qytetet
