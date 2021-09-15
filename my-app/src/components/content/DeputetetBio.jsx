import React, { Component } from "react";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import "../../App.scss";

export class DeputetetBio extends Component {
    constructor(props) {
        super(props);
        this.state = { regs: [], editModalShow: false };
      }
      componentDidMount() {
        fetch("http://localhost:5000/api/Biografi")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ regs: data });
          });
      }
    
      refreshList() {
        fetch("http://localhost:5000/api/Biografi")
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
    
      deleteBio(IDBiografi) {
        fetch("http://localhost:5000/api/Biografi/" + IDBiografi, {
          method: "DELETE",
          header: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
      }
      render() {
        const { regs, IDBiografi, PhotoFileName, Emri, Mbiemri, Partia, Biografia, nrMandateve} = this.state;
        return (
          <div className="deputetetContent">
            <h1 class="titulliLart">Deputetët e Kosovës</h1>
            {/* <div className="votuesitDiv"> */}
            <div>
              
              <Table className="dep">
                <thead>
                  <tr>
                    
                    
                    <th>Emri</th>
                    <th>Mbiemri</th>
                    <th>Partia</th>
                    <th>Biografia</th>
                    <th>Numri i Mandateve</th>
                    <th>Fshij</th>
                  </tr>
                </thead>
                <tbody>
                  {regs.map((reg) => (
                    <tr key={reg.IDBiografi}>
                      <td>{reg.Emri}</td>
                      <td>{reg.Mbiemri}</td>
                      <td>{reg.Partia}</td> 
                      <td>{reg.Biografia}</td>
                      <td>{reg.nrMandateve}</td>
                      <td>
                        {" "}
                        <ButtonToolbar className="butonat">
                          <Button
                            className="fshijButon"
                            onClick={() => this.deleteBio(reg.IDBiografi)}
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

export default DeputetetBio;