import React,{Component} from 'react';
import '../../App.scss';
import {Button, ButtonToolbar, Form, Row, Col, Table} from 'react-bootstrap'
import {register} from "../login/register";
import { FaRegSnowflake } from 'react-icons/fa';


export class votuesit extends Component{

    constructor(props){
        super(props);
        this.state={regs:[]}
    }
    refreshList(){
        fetch('http://localhost:5000/api/Register')
        .then(response=>response.json())
        .then(data=>{
            this.setState({regs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }


render() {
    const {regs, votuesi_id,username,nrLeter,email}=this.state;
    return (
      <div className="deputetetContent">
        <h1 class="titulliLart">Votuesit</h1>
        <Table className="mt-4" striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>Votuesi_ID</th>
                        <th>Username</th>
                        <th>Numri i Leternjoftimit</th>
                        <th>Email</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {regs.map(reg=>
                            <tr key={reg.votuesi_id}>
                                <td>{reg.username}</td>
                                <td>{reg.nrLeternjoftimit}</td>
                                <td>{reg.email}</td>
                                <td>


        {/* <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteEmp(emp.EmployeeId)}>
            Delete
        </Button> */}
{/* 
        <EditEmpModal show={this.state.editModalShow}
        onHide={editModalClose}
        empid={empid}
        empname={empname}
        depmt={depmt}
        photofilename={photofilename}
        doj={doj}
        /> */}
{/* </ButtonToolbar> */}

                                </td>

                            </tr>)}
                    </tbody>

                </Table>
      </div>

    );
}





}

export default votuesit
