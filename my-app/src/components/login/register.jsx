// import React from "react";
import React,{Component} from 'react';
import loginImg from "../../login.svg";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddRegModal} from "./AddRegModal";
import {Modal,Row, Col, Form} from 'react-bootstrap';
export class Register extends Component {

    constructor(props) {
        super(props);
        this.state={regs:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
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
    
    handleSubmit(event){
        
        event.preventDefault();
        fetch('http://localhost:5000/api/Register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               
                // votuesi_id:null,
                // username:event.target.username.value,
                // nrLeternjoftimit:event.target.nrLeternjoftimit.value,
                // email:event.target.email.value,
                // password:event.target.password.value

               username:"Leon",
               nrLeternjoftimit:12312321,
               email:"dfsd@hotmail.com",
               Password:"fsdfsd"

                // username:this.state.username,
                // nrLeternjoftimit:this.state.nrLeternjotimit,
                // email:this.state.email,
                // password:this.state.password
               
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }


    render() {
        // const {regId,username,nrLeternjoftimit,email,Password}=this.state;
        // let addModalClose=()=>this.setState({addModalShow:false});
    
        return <div className="base-container" ref={this.props.conatinerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
               
                <div className="form">
                    <div className="form-group">
                          <label htmlFor="username">Username</label>
                       
                        <input className="username" type="text" id="username" name="username"  placeholder="username"  />
                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="nrleternjoftimit">Numri i Leternjoftimit</label>
                        <input className="nrLeternjoftimit" type="text" id="nrLeternjoftimit" name="nrleternjoftimit" placeholder="Numri i Leternjoftimit" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input  className="email" type="text" id="email" name="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="password" type="password" id="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
             <div className="footer">
<button type="submit" className="btn" onClick={this.handleSubmit}>Register</button>
</div> 
            </div>
        </div>
    }

}

  {/* <ButtonToolbar className="btn">
                    <Button variant='primary'
                    onClick={this.handleSubmit}>
                    Register</Button>

                    <AddRegModal show={this.state.addModalShow}
                   onHide={addModalClose}/>
                    
                </ButtonToolbar> */}