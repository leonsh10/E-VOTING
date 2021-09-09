import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import { EditPartModal } from "./EditPartModal";

export class partite extends Component {
  constructor(props) {
    super(props);
    this.state = { part: [], editModalShow: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/Partit")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ part: data });
      });
  }

  refreshList() {
    fetch("http://localhost:5000/api/Partit")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ part: data });
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
    fetch("http://localhost:5000/api/Partit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // partit_id: event.target.partit_id.value,
        emri_Partis: event.target.emri_Partis.value,
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

  deletePartine(partit_id) {
    fetch("http://localhost:5000/api/Partit/" + partit_id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    const { part, partit_id, emri_Partis } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Partitë</h1>
        {/* <ButtonToolbar>
            <Button className="mb-2" variant="secondary" size="lg">
              +SHTO SUBJEKT
            </Button>
            <Button className="mb-2" variant="secondary" size="lg">
              -FSHIJ SUBJEKT
            </Button>
          </ButtonToolbar> */}
        <div className="forma">
          <Form className="forma1" onSubmit={this.handleSubmit}>
            {/* <Form.Row> */}
              <input
                type="text"
                id="inputi"
                name="emri_Partis"
                class="form-content2"
                placeholder="Emri i Partise..."
              ></input>
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
            {/* </Form.Row> */}
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
        <div className="votuesitDiv">
          <Table className="vot1">
            <thead>
              <tr>
                <th>IDPartia</th>
                <th>Emri i Partise</th>
                <th>Edit/Fshij</th>
              </tr>
            </thead>
            <tbody>
              {part.map((par) => (
                <tr key={par.partit_id}>
                  <td>{par.partit_id}</td>
                  <td>{par.emri_Partis}</td>

                  <td>
                    <ButtonToolbar className="butonat">
                      <Button
                        className="editButon"
                        variant="info"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                            partit_id: par.partit_id,
                            emri_Partis: par.emri_Partis,
                          })
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        className="fshijButon"
                        variant="danger"
                        onClick={() => this.deletePartine(par.partit_id)}
                      >
                        Fshij
                      </Button>
                      <EditPartModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        partit_id={partit_id}
                        emri_Partis={emri_Partis}
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
export default partite;
