import React, { Component } from "react";
import "../../App.scss";
import { Button, ButtonToolbar, Form, Row, Col, Table } from "react-bootstrap";
import { EditDepModal } from "./EditDepModal";
export class deputetet extends Component {
  constructor(props) {
    super(props);
    this.state = { depu: [], part: [], editModalShow: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/Partit")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ part: data });
      });
  }

  // componentDidMount(){
  //   fetch('http://localhost:5000/api/Deputetet')
  //   .then(response=>response.json())
  //   .then(data2=>{
  //       this.setState({depu:data2});
  //   });
  // }

  refreshList() {
    fetch("http://localhost:5000/api/Deputetet")
      .then((response) => response.json())
      .then((data2) => {
        this.setState({ depu: data2 });
      });
  }

  // componentDidMount(){
  //   this.refreshList();
  // }

  componentDidUpdate() {
    this.refreshList();
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/Deputetet", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // deputetet_id: event.target.deputetet_id.value,
        Partia: event.target.Partia.value,
        Emri: event.target.Emri.value,
        Numri: event.target.Numri.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert("Deputeti u shtua me sukses");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  deleteDeputetin(deputetet_id) {
    fetch("http://localhost:5000/api/Deputetet/" + deputetet_id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    const { depu, deputetet_id, Partia, Emri, Numri } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Deputetët</h1>

        <div>
          <Form className="forma1" onSubmit={this.handleSubmit}>
             {/* <Form.Group controlId="Emri"> */}
              {/* <Form.Label>EmriQytetit</Form.Label> */}
              {/* <Form.Label>Emri</Form.Label> */}
              {/* <Form.Control
                type="text"
                name="Emri"
                required
                placeholder="Emri dhe Mbiemri..."
                className="form-content2"
              /> */}
            {/* </Form.Group> */}
            <input
                type="text"
                id="inputi"
                name="Emri"
                required
                class="form-content2"
                placeholder="Emri dhe Mbiemri..."
              ></input>
            {/* <Form.Group controlId="Partit"> */}
              {/* <Form.Label>Partite</Form.Label> */}
              {/* <Form.Control as="select" name="Partia"> */}
              <select name="Partia" className="form-content2">
                {this.state.part.map((par) => (
                  <option key={par.partit_id}>{par.emri_Partis}</option>
                ))}
              </select>
            {/* </Form.Group> */}
            {/* <Form.Group controlId="Numri"> */}
              {/* <Form.Label>Numri I Deputetit</Form.Label> */}
              <select class="form-content2" name="Numri">
                <option>Zgjedh numrin</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            {/* </Form.Group> */}

            <div className="buton-div">
              <Button variant="primary" type="submit" className="shto-btnD">
                Shto
              </Button>
            </div>
          </Form>

          {/* <Form.Control as="select" size="lg" className="form-content"> */}
        </div>

        <div className="votuesitDiv">
          <Table className="vot1">
            <thead>
              <tr>
                <th>ID_Deputeti</th>
                <th>Emri Dhe Mbiemri</th>
                <th>Partia</th>
                <th>Numri</th>
                <th>Edit/Fshij</th>
              </tr>
            </thead>
            <tbody>
              {depu.map((dep) => (
                <tr key={dep.deputetet_id}>
                  <td>{dep.deputetet_id}</td>
                  <td>{dep.Emri}</td>
                  <td>{dep.Partia}</td>
                  <td>{dep.Numri}</td>
                  <td>
                    <ButtonToolbar className="butonat">
                      <Button
                        className="editButon"
                        variant="info"
                        onClick={() =>
                          this.setState({
                            editModalShow: true,
                            deputetet_id: dep.deputetet_id,
                            Partia: dep.Partia,
                            Emri: dep.Emri,
                            Numri: dep.Numri,
                          })
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="fshijButon"
                        onClick={() => this.deleteDeputetin(dep.deputetet_id)}
                      >
                        Fshij
                      </Button>
                      <EditDepModal
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        deputetet_id={deputetet_id}
                        Partia={Partia}
                        Emri={Emri}
                        Numri={Numri}
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
export default deputetet;
