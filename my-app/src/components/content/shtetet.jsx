import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import { EditShtetModal } from "./EditShtetModal";
export class shtetet extends Component {
  constructor(props) {
    super(props);
    this.state = { shtet: [], editModalShow: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/Shtetet")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ shtet: data });
      });
  }

  refreshList() {
    fetch("http://localhost:5000/api/Shtetet")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ shtet: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/Shtetet", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // shtetet_id: event.target.shtetet_id.value,
        emri_shtetet: event.target.emri_shtetet.value,
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

  deleteShtetin(shtetet_id) {
    fetch("http://localhost:5000/api/Shtetet/" + shtetet_id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    const { shtet, shtetet_id, emri_shtetet } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Shtetet</h1>

        <div className="forma">
          <Form className="forma1" onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="inputi"
              name="emri_shtetet"
              class="form-content2"
              placeholder="Emri i Shtetit..."
            ></input>
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
                <th>ID_Shteti</th>
                <th>Emri i Shtetit</th>
                <th>Edit/Fshij</th>
              </tr>
            </thead>
            <tbody>
              {shtet.map((shte) => (
                <tr key={shte.shtetet_id}>
                  <td>{shte.shtetet_id}</td>
                  <td>{shte.emri_shtetet}</td>

                  <td>
                    <ButtonToolbar className="butonat">
                      <Button
                        className="editButon"
                        variant="info"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                            shtetet_id: shte.shtetet_id,
                            emri_shtetet: shte.emri_shtetet,
                          })
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="fshijButon"
                        onClick={() => this.deleteShtetin(shte.shtetet_id)}
                      >
                        Fshij
                      </Button>
                      <EditShtetModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        shtetet_id={shtetet_id}
                        emri_shtetet={emri_shtetet}
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
export default shtetet;
