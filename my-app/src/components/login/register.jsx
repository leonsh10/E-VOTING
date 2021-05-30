import React from "react";
import loginImg from "../../login.svg";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddRegModal} from "./AddRegModal";
export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state={regs:[], addModalShow:false, editModalShow:false}
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
                username:"Leon",
                nrLeternjoftimit:123556,
                email:"lssf@hotmail.com",
                Password:"dffdgdf"
                
             
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
                        <input type="hidden" name="hiden" id="hiden" />
                        <input type="text" name="username" id="username" placeholder="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nrleternjoftimit">Numri i Leternjoftimit</label>
                        <input type="text" name="nrleternjoftimit" placeholder="Numri i Leternjoftimit" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" required/>
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