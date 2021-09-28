import React, { Component } from "react";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import "../../App.scss";
import logo from '.././images/logo.png';
import { EditBioModal } from "./EditBioModal";
import logoK from "../../header-logo.svg";

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
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
          <div className="deputetetContent">
            <div className="logos">
          <img src={logoK}></img>
          <p>Republika e Kosovës</p>
        </div>
            {/* <h2 class="titulliLart">Deputetët e Kosovës</h2> */}
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
                            className="editButon"
                            variant="info"
                            onClick={() =>
                              this.setState({
                                editModalShow: true,
                                IDBiografi: reg.IDBiografi,
                                Emri: reg.Emri,
                                Mbiemri: reg.Mbiemri,
                                Partia: reg.Partia,
                                Biografia: reg.Biografia,
                                nrMandateve: reg.nrMandateve,
                              })
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            className="fshijButon"
                            variant="danger"
                            onClick={() => this.deleteBio(reg.IDBiografi)}
                          >
                            Fshij
                          </Button>
                          <EditBioModal
                            show={this.state.editModalShow}
                            onHide={editModalClose}
                            IDBiografi={IDBiografi}
                            Emri={Emri}
                            Mbiemri={Mbiemri}
                            Partia={Partia}
                            Biografia={Biografia}
                            nrMandateve={nrMandateve}
                          />
                        </ButtonToolbar>
                      </td>
                    </tr>
                   ))} 
                </tbody>
              </Table>
            </div>
            <div class="footerD">
              <img src={logo} class="imageF"></img>
              <i>&copy;</i>
              <p>Republika e Kosovës - Te gjitha te drejtat e rezervuara</p>
            </div>
          </div>
        );
      }
}

export default DeputetetBio;