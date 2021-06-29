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
          {/* <ButtonToolbar>
            <Button class="qytBtn"
              variant="primary"
              onClick={() => this.setState({ addModalShow: true })}
            >
              Shto Qytetin
            </Button>

            <AddQytModal
              show={this.state.addModalShow}
              onHide={addModalClose}
            />
          </ButtonToolbar> */}
        </div>
        <ButtonToolbar>
            <Button class="qytBtn"
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
    );
  }
}
