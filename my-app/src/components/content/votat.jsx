import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";

export class votuesit extends Component {
  constructor(props) {
    super(props);
    this.state = { regs: [], editModalShow: false };
    // this.handleSubmit=this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/Votimi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ regs: data });
      });
  }

  refreshList() {
    fetch("http://localhost:5000/api/Votimi")
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

  deleteVota(IDVota) {
    fetch("http://localhost:5000/api/Votimi/" + IDVota, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    const {
      regs,
      IDVota,
      Partia,
      DeputetiPare,
      DeputetiDyte,
      DeputetiTrete,
      DeputetiKatert,
      DeputetiPeste,
    } = this.state;
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Votat</h1>
        <div className="votuesitDiv">
          <Table className="vot1">
            <thead>
              <tr>
                <th>Partia</th>
                <th>Deputeti 1</th>
                <th>Deputeti 2</th>
                <th>Deputeti 3</th>
                <th>Deputeti 4</th>
                <th>Deputeti 5</th>
                <th>Fshij</th>
              </tr>
            </thead>
            <tbody>
              {regs.map((reg) => (
                <tr key={reg.IDVota}>
                  <td>{reg.Partia}</td>
                  <td>{reg.DeputetiPare}</td>
                  <td>{reg.DeputetiDyte}</td>
                  <td>{reg.DeputetiTrete}</td>
                  <td>{reg.DeputetiKatert}</td>
                  <td>{reg.DeputetiPeste}</td>
                  <td>
                    {" "}
                    <ButtonToolbar className="butonat">
                      <Button
                        variant="danger"
                        className="fshijButon"
                        onClick={() => this.deleteVota(reg.IDVota)}
                      >
                        Fshij
                      </Button>
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
