import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import shtetet from "./shtetet";
import { AddQytModal } from "./AddQytModal";
import { EditQytModal } from "./EditQytModal";

export class Qytetet extends Component {
  constructor(props) {
    super(props);
    this.state = { qyts: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch("http://localhost:5000/api/Qyteti")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ qyts: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteQyt(qyid) {
    if (window.confirm("Are you sure?")) {
      fetch("http://localhost:5000/api/Qyteti/" + qyid, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }
  render() {
    const { qyts, qyid, qytemri, shteti } = this.state;
    let addModalClose=()=>this.setState({addModalShow:false});
    let editModalClose=()=>this.setState({editModalShow:false});
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
        {/* ================================= */}
        {/* <div className="forma">
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Control as="select" size="lg" className="form-content2"> */}
        {/* {this.state.regs.map((sht) => (
                  <option key={sht.shtetet_id}>{sht.emri_shtetet}</option>
                ))} */}
        {/* <option>Kosove</option>
              </Form.Control>
              <Form.Control
                size="lg"
                type="text"
                name="EmriMbiemri"
                placeholder="Emri Qytetit..."
                className="form-content2"
              />
              <div className="buton-div">
                <Button
                  variant="primary"
                  type="submit"
                  className="shto-btnD"
                  onClick={this.handleSubmit}
                >
                  Shto
                </Button>
              </div>
            </Form.Row>
          </Form>
        </div> */}
        {/* ================================= */}
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
        {/* <table className="tabela">
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
                <Button className="info" variant="info">
                  Edit
                </Button>

                <Button className="danger" variant="danger">
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
                <Button className="info" variant="info">
                  Edit
                </Button>

                <Button className="danger" variant="danger">
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
                <Button className="info" variant="info">
                  Edit
                </Button>

                <Button className="danger" variant="danger">
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
                <Button className="info" variant="info">
                  Edit
                </Button>

                <Button className="danger" variant="danger">
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
                <Button className="info" variant="info">
                  Edit
                </Button>

                <Button className="danger" variant="danger">
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
                <Button className="info" variant="info">
                  Edit
                </Button>

                <Button className="danger" variant="danger">
                  Delete
                </Button>
              </ButtonToolbar>
            </td>
          </tr>
        </table> */}
        <div className="votuesitDiv">
          <Table className="vot1">
            <thead>
              <tr>
                {/* <th></th> */}
                <th>IDQytet</th>
                <th>Shteti</th>
                <th>Emri Qytetit</th>
                <th>Edit/Fshij</th>
              </tr>
            </thead>
            <tbody>
              {qyts.map((qyt) => (
                <tr key={qyt.IDQyteti}>
                  <td>{qyt.IDQyteti}</td>
                  <td>{qyt.Shteti}</td>
                  <td>{qyt.EmriQytetit}</td>
                  <td>
                    {/* {" "} */}
                    <ButtonToolbar className="butonat">
                      <Button
                        className="editButon"
                        variant="info"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                            qyid: qyt.IDQyteti,
                            shteti: qyt.Shteti,
                            qytemri: qyt.EmriQytetit,
                          })
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        className="editButon"
                        variant="danger"
                        onClick={() => this.deleteQyt(qyt.IDQyteti)}
                      >
                        Fshij
                      </Button>
                      <EditQytModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        qyid={qyid}
                        shteti={shteti}
                        qytemri={qytemri}
                      />
                    </ButtonToolbar>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ButtonToolbar>
            <Button
              variant="primary"
              onClick={() => this.setState({ addModalShow: true })}
            >
              Shto Qytetin
            </Button>

            <AddQytModal
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}
