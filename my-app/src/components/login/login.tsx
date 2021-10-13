import React from "react";
// import Component from "react";
import loginImg from "../../login.svg";
import UserStore from "../users/userStore";
import { Formik,Form ,ErrorMessage} from 'formik';
// import observer from "mobx";
import { observer } from "mobx-react-lite"
import {Label} from 'reactstrap';
// import {  Button,FormGroup, FormControl} from "react-bootstrap";
import MyTextInput from "./MyTextInput";
import registro from "./RegisterForm";
import { useStore } from "../users/store";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../../App.scss";


// import initialValues from 'react-form-values';

// export class extends React.Component {

    export default observer (function Login(){
    // constructor(props) {
    //     super(props);
    // }

    const {userStore} = useStore();
    // render() {
    //     return <div className="base-container" ref={this.props.conatinerRef}>
    //         <div className="header">Login</div>
    //         <div className="content">
    //             <div className="image">
    //                 <img src={loginImg} />
    //             </div>
    //             <div className="form">
    //                 <div className="form-group">
    //                     <label htmlFor="nrleternjoftimit">Numri i Leternjoftimit</label>
    //                     <input type="text" name="nrleternjoftimit" class="inputt" placeholder="Numri i Leternjoftimit" />
    //                 </div>
    //                 <div className="form-group">
    //                     <label htmlFor="password">Password</label>
    //                     <input type="password" name="password" class="inputt" placeholder="Password" />
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="footer">
    //             <button type="submit" id="butoni123" className="btn">Login</button>
    //         </div>
    //     </div>
    // }

    // render(){

        return <Formik
                initialValues={{email:'',nrLeternjofimit : '', password: '', error:null}}
                onSubmit={(values, {setErrors}) => userStore.login(values).catch(error =>
                    setErrors({error:"Ploteso te dhenat sakte!."}) )} 
                >
            {({handleSubmit,errors}) => (
                <Form className='ui form loginForm' onSubmit={handleSubmit} autoComplete='off'>
                    <h3 className="text-info text-center">Kyçu</h3>
                    
                    {/* <MyTextInput name='email' placeholder='Emaili' /> */}
                    {/* <Label class="labelRegister text-info labelsR" for="Email">Email:</Label> */}
                    <p className="text-info">Email:</p>
                    <MyTextInput pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name='Email' placeholder='Email' required />
                    {/* <Label class="labelRegister text-info labelsR" for="nrLeternjoftimit">Numri i Leternjoftimit:</Label> */}
                    <p className="text-info">Numri i Leternjoftimit: (10 Numra)</p>
                    <MyTextInput pattern="[0-9*].{10}" name='nrLeternjoftimit' placeholder='Numri i Leternjoftimit' required/>
                    {/* <Label class="labelRegister text-info labelsR" for="password">Password:</Label> */}
                    <p className="text-info">Password: (8-12 Karaktere)</p>
                    <MyTextInput pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"  name='password' placeholder='Password' type='password' required/>
                    <ErrorMessage
                    name='error' render={() => 
                    <Label style={{marginBottom:5,color:'red',fontSize:20}} basic color='red' content={errors.error}/>}
                    /> 
                    <Button className="btn btn-info btn-md btnL" positive content='Login' type='submit' fluid />
                    <a href="./RegisterForm" className="linkuR">Regjistrohu</a>
                    {/* <Link style={navStyle} to="/registro">
                    <li>Regjistrohu</li>
                </Link> */}
                </Form>
            )}


        </Formik>
          })

        