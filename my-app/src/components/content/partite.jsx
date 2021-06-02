import React from 'react';
import '../../App.scss';
import {Button, ButtonToolbar, Form, Row, Col, Table} from 'react-bootstrap';

function partite() {
    return (
        <div className="deputetetContent">
          <h1 class="titulliLart">Partite</h1>
          {/* <ButtonToolbar>
            <Button className="mb-2" variant="secondary" size="lg">
              +SHTO SUBJEKT
            </Button>
            <Button className="mb-2" variant="secondary" size="lg">
              -FSHIJ SUBJEKT
            </Button>
          </ButtonToolbar> */}
          <div className="forma">
            <Form>
            <Form className="forma1">
              <Form.Row>
              <input type="text" id="inputi" class="form-content2" placeholder="Emri i Partise..."></input>
                {/* <Form.Control
                  size="lg"
                  type="text"
                  name="EmriMbiemri"
                  placeholder="Partia..."
                  className="form-content"
                /> */}
                <div className="buton-div">
                  <Button variant="primary" type="submit" className="shto-btnD">
                    Shto
                  </Button>
                </div>
              </Form.Row>
              </Form>
            </Form>
          </div>
          {/* <Table className="mt-4" striped bordered hover size="sm"> */}
          {/* <Table className="tableData">
          <thead>
            <tr>
              <th>IDPartia</th>
              <th>Emri Partise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              Test
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
            <th className="tabelaHD">partit_id</th>
            
            <th className="tabelaHD">emri_Partis</th>
            <th className="tabelaHD">Opsionet</th>
          </tr>
          <tr>
            <td className="tabelaHD">1</td>
            
            <td className="tabelaHD">VV</td>
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
            
            <td className="tabelaHD">PDK</td>
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
            
            <td className="tabelaHD">LDK</td>
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
            
            <td className="tabelaHD">AAK</td>
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
            
            <td className="tabelaHD">AKR</td>
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
            
            <td className="tabelaHD">NISMA</td>
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

export default partite
