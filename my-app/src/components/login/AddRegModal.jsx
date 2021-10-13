// import React,{Component} from 'react';
// import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

// export class AddRegModal extends Component{
//     constructor(props){
//         super(props);
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }

//     render = ()=> { return <p></p>}
//         handleSubmit(event){
//             event.preventDefault();
//             fetch('http://localhost:5000/api/Register',{
//                 method:'POST',
//                 headers:{
//                     'Accept':'application/json',
//                     'Content-Type':'application/json'
//                 },
//                 body:JSON.stringify({

//                     username:event.target.username.value,
//                 nrLeternjoftimit:event.target.nrLeternjoftimit.value,
//                 email:event.target.email.value,
//                 password:event.target.password.value
//                 })
//             })
//             .then(res=>res.json())
//             .then((result)=>{
//                 alert(result);
//             },
//             (error)=>{
//                 alert('Failed');
//             })
//         }

//         }
