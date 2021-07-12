import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import shtetet from "./shtetet";
// import { AddQytModal } from "./AddQytModal";
import { EditHomModal } from "./EditHomModal";

export class HomeDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { homs: [], editModalShow: false };
  }

  refreshList() {
    fetch("http://localhost:5000/api/Home")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ homs: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteHom(homid) {
    if (window.confirm("Are you sure?")) {
      fetch("http://localhost:5000/api/Home/" + homid, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }
  /* ========================= */

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/Home", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // idHome:null,
        Titulli: event.target.Titulli.value,
        Content: event.target.Content.value,
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
    const { homs, homid, titulli, content } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Kryefaqja</h1>
        <div>
          <Form className="forma1" onSubmit={this.handleSubmit}>
            <Form.Group controlId="Titulli">
              {/* <Form.Label>EmriQytetit</Form.Label> */}
              <Form.Control
                type="text"
                name="Titulli"
                required
                placeholder="Titulli"
                className="form-content2"
              />
            </Form.Group>
            <Form.Group controlId="Content">
              {/* <Form.Label>EmriQytetit</Form.Label> */}
              <Form.Control
                type="text"
                name="Content"
                required
                placeholder="Permbajtja"
                className="form-content2"
              />
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
                <th>ID</th>
                <th>Titulli</th>
                <th>Permbajtja</th>
                <th>Edit/Fshij</th>
              </tr>
            </thead>
            <tbody>
              {homs.map((hom) => (
                <tr key={hom.idHome}>
                  <td>{hom.idHome}</td>
                  <td>{hom.Titulli}</td>
                  <td>{hom.Content}</td>
                  <td>
                    {/* {" "} */}
                    <ButtonToolbar className="butonat">
                      <Button
                        className="editButon"
                        variant="info"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                            homid: hom.idHome,
                            titulli: hom.Titulli,
                            content: hom.Content,
                          })
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        className="fshijButon"
                        variant="danger"
                        onClick={() => this.deleteHom(hom.idHome)}
                      >
                        Fshij
                      </Button>
                      <EditHomModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        homid={homid}
                        titulli={titulli}
                        content={content}
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
