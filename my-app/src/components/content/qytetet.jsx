import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import shtetet from "./shtetet";
// import { AddQytModal } from "./AddQytModal";
import { EditQytModal } from "./EditQytModal";

export class Qytetet extends Component {
  constructor(props) {
    super(props);
    this.state = { qyts: [], deps: [],editModalShow: false };
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
  /* ========================= */
  componentDidMount() {
    // event.preventDefault();
    fetch("http://localhost:5000/api/Shtetet")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/Qyteti", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // IDQyteti:null,
        EmriQytetit: event.target.EmriQytetit.value,
        Shteti: event.target.Shteti.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }
  /* ============================== */
  render() {
    const { qyts, qyid, qytemri, shteti } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Qytetet</h1>
        <div>
          <Form className="forma1" onSubmit={this.handleSubmit}>
            <Form.Group controlId="EmriQytetit">
              {/* <Form.Label>EmriQytetit</Form.Label> */}
              <Form.Control
                type="text"
                name="EmriQytetit"
                required
                placeholder="Emri i Qytetit"
                className="form-content2"
              />
            </Form.Group>
            <Form.Group controlId="Shteti">
              {/* <Form.Label>Shteti</Form.Label> */}
              <Form.Control as="select" className="form-content2">
                {this.state.deps.map((dep) => (
                  <option key={dep.shtetet_id}>{dep.emri_shtetet}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <div className="buton-div">
              <Button variant="primary" type="submit" className="shto-btnD">
                Shto
              </Button>
            </div>
          </Form>
        </div>
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
                        className="fshijButon"
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
        </div>
      </div>
    );
  }
}
