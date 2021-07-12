import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import { register } from "../login/register";
import { FaRegSnowflake } from "react-icons/fa";
import { EditRegModal } from "../login/EditRegModal";
import context from "react-bootstrap/esm/AccordionContext";

export class contactDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { cont: [], editModalShow: false };
    // this.handleSubmit=this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/Contact")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cont: data });
      });
  }

  refreshList() {
    fetch("http://localhost:5000/api/Contact")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cont: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteUser(id_contact) {
    fetch("http://localhost:5000/api/Contact/" + id_contact, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    const { cont, id_contact, emri, email, nrtelefonit, mesazhi } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Contact</h1>
        <div className="votuesitDiv">
          {/* <h1 class="titulliLart">Votuesit</h1> */}
          <Table className="vot1">
            <thead>
              <tr>
                {/* <th>Votuesi_ID</th> */}
                <th>Emri</th>
                <th>Email</th>
                <th>Numri Telefonit</th>
                <th>Mesazhi</th>
                <th>Edit/Fshij</th>
              </tr>
            </thead>
            <tbody>
              {cont.map((con) => (
                <tr key={con.votuesi_id}>
                  <td>{con.emri}</td>
                  <td>{con.email}</td>
                  <td>{con.nrtelefonit}</td>

                  <td>{con.mesazhi}</td>
                  <td>
                    {" "}
                    <ButtonToolbar className="butonat">
                      <Button
                        className="editButon"
                        variant="info"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                            id_contact: con.id_contact,
                            emri: con.emri,
                            email: con.email,
                            nrtelefonit: con.nrtelefonit,
                            mesazhi: con.mesazhi,
                          })
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        className="fshijButon"
                        onClick={() => this.deleteUser(con.id_contact)}
                      >
                        Fshij
                      </Button>
                      <EditRegModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        emri={emri}
                        email={email}
                        nrtelefonit={nrtelefonit}
                        mesazhi={mesazhi}
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

export default contactDashboard;
