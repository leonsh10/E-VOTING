import React from "react";
// import Component from "react";
import loginImg from "../../login.svg";
import UserStore from "../users/userStore";
import { Formik,Form ,ErrorMessage} from 'formik';
// import observer from "mobx";
import { observer } from "mobx-react-lite"
import {Label} from 'reactstrap';
import {  Button,FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import MyTextInput from "./MyTextInput";
// import initialValues from 'react-form-values';

// export class extends React.Component {

    export default observer (function login(){
    // constructor(props) {
    //     super(props);
    // }


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
                initialValues={{nrLeternjoftimit : '', password: ''}}
                onSubmit={values => console.log(values)} 
                >
            {({handleSubmit}) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name='nrLeternjoftimit' placeholder='NrLeternjoftimit' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    {/* <ErrorMessage
                    name='error' render={() => 
                    <Label style={{marginBottom:10}} basic color='red' content={errors.error}/>}
                    /> */}
                    <Button positive content='Login' type='submit' fluid />
                </Form>
            )}


        </Formik>
          })

        