import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import { register } from "../login/register";
import { FaRegSnowflake } from "react-icons/fa";
import { EditVotuesModal } from "./EditVotuesModal";

export class votuesit extends Component {
  constructor(props) {
    super(props);
    this.state = { regs: [],regs2: [], editModalShow: false };
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

  // componentDidMount() {
  //   fetch("http://localhost:5000/api/role")
  //     .then((response) => response.json())
  //     .then((data2) => {
  //       this.setState({ regs2: data2 });
  //     });
  // }

  // refreshList() {
  //   fetch("http://localhost:5000/api/role")
  //     .then((response) => response.json())
  //     .then((data2) => {
  //       this.setState({ regs2: data2 });
  //     });
  // }

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
    const { regs, nrLeternjofimit,Id,UserName, Email, Name ,PasswordHash } = this.state;

    
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
                <th>Roli</th>
                <th>Edit/Fshij</th>
              </tr>
            </thead>
            <tbody>
              {regs.map((reg) => (
                <tr key={reg.Id}>
                  <td>{reg.UserName}</td>
                  <td>{reg.nrLeternjofimit}</td>                
                  <td>{reg.Email}</td>
                  <td>{reg.Name}</td> 
                  <td>
                 
                    <ButtonToolbar className="butonat">
                      <Button
                        className="editButon"
                        variant="info"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                            Id: reg.Id,
                            UserName: reg.UserName,
                            nrLeternjofimit: reg.nrLeternjofimit,
                            Email: reg.Email,
                            Name: reg.Name
                          })
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        className="fshijButon"
                        variant = "danger"
                        onClick={() => this.deleteUser(reg.Id)}
                      >
                        Fshij
                      </Button>
                      <EditVotuesModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        UserName={UserName}
                        nrLeternjofimit={nrLeternjofimit}
                        Email={Email}
                        Name={Name}
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
