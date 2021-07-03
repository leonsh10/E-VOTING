import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import { register } from "../login/register";
import { FaRegSnowflake } from "react-icons/fa";
// import { EditVotModal } from "../login/EditVotModal";

export class votuesit extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { regs: [], editModalShow: false };
//     // this.handleSubmit=this.handleSubmit.bind(this);
//   }
//   componentDidMount() {
//     fetch("http://localhost:5000/api/Register")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ regs: data });
//       });
//   }

//   refreshList() {
//     fetch("http://localhost:5000/api/Register")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ regs: data });
//       });
//   }

//   componentDidMount() {
//     this.refreshList();
//   }

//   componentDidUpdate() {
//     this.refreshList();
//   }

//   deleteUser(votuesi_id) {
//     fetch("http://localhost:5000/api/Register/" + votuesi_id, {
//       method: "DELETE",
//       header: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });
//   }

  render() {
    // const { regs, votuesi_id, username, nrLeternjoftimit, email } = this.state;
    // let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Votat</h1>
        <div className="votuesitDiv">
          {/* <h1 class="titulliLart">Votuesit</h1> */}
          <Table className="vot1">
            <thead>
              <tr>
                {/* <th>Votuesi_ID</th> */}
                <th>ID</th>
                <th>Partia</th>
                <th>Deputeti 1</th>
                <th>Deputeti 2</th>
                <th>Deputeti 3</th>
                <th>Deputeti 4</th>
                <th>Deputeti 5</th>
                <th>Edit/Fshij</th>
              </tr>
            </thead>
            <tbody>
              {/* {regs.map((reg) => ( */}
                {/* <tr key={reg.votuesi_id}> */}
                <tr>
                  {/* <td>{reg.username}</td>
                  <td>{reg.nrLeternjoftimit}</td>
                  <td>{reg.email}</td> */}
                  <td>1</td>
                  <td>VV</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>
                    {" "}
                    <ButtonToolbar className="butonat">
                      <Button
                        className="editButon"
                        variant="info"
                        // onClick={() =>
                        //   this.setState({
                        //     editModalShow: true,
                        //     votuesi_id: reg.votuesi_id,
                        //     username: reg.username,
                        //     nrLeternjoftimit: reg.nrLeternjoftimit,
                        //     email: reg.email,
                        //   })
                        // }
                      >
                        Edit
                      </Button>
                      <Button
                        className="editButon"
                        //onClick={() => this.deleteUser(reg.votuesi_id)}
                      >
                        Fshij
                      </Button>
                      {/* <EditRegModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        username={username}
                        nrLeternjoftimit={nrLeternjoftimit}
                        email={email}
                        votuesi_id={votuesi_id}
                      /> */}
                    </ButtonToolbar>
                  </td>
                </tr>
              {/* ))} */}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default votuesit;
