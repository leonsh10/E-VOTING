import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import { register } from "../login/register";
import { FaRegSnowflake } from "react-icons/fa";
import { EditRegModal } from "../login/EditRegModal";

export class votuesit extends Component {
  constructor(props) {
    super(props);
    this.state = { regs: [], editModalShow: false };
    // this.handleSubmit=this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/Account/userat")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ regs: data });
      });
  }

  refreshList() {
    fetch("http://localhost:5000/api/Account/userat")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ regs: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteUser(Id) {
    fetch("http://localhost:5000/api/Account/" + Id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    const { regs, Id, UserName, nrLeternjoftimit, Email } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Votuesit</h1>
        <div className="votuesitDiv">
          {/* <h1 class="titulliLart">Votuesit</h1> */}
          <Table className="vot1">
            <thead>
              <tr>
                {/* <th>Votuesi_ID</th> */}
                <th>Username</th>
                <th>Numri i Leternjoftimit</th>
                <th>Email</th>
                <th>Edit/Fshij</th>
              </tr>
            </thead>
            <tbody>
              {regs.map((reg) => (
                <tr key={reg.nrLeternjoftimit}>
                  <td>{reg.UserName}</td>
                  <td>{reg.nrLeternjoftimit}</td>
                  <td>{reg.Email}</td>
                  <td>
                    {" "}
                    <ButtonToolbar className="butonat">
                      <Button
                        className="editButon"
                        variant="info"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                           // Id: reg.Id,
                            UserName: reg.UserName,
                            nrLeternjoftimit: reg.nrLeternjoftimit,
                            Email: reg.Email,
                          })
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        className="fshijButon"
                        onClick={() => this.deleteUser(reg.Id)}
                      >
                        Fshij
                      </Button>
                      <EditRegModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        UserName={UserName}
                        nrLeternjoftimit={nrLeternjoftimit}
                        Email={Email}
                        Id={Id}
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

export default votuesit;
