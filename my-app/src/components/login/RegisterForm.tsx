import { ErrorMessage, Formik } from "formik"
import { useStore } from "../users/store"
import { observer } from "mobx-react"
import { Form } from "semantic-ui-react"
import {Button,Label} from "semantic-ui-react"
//import "./register.scss";
import "../../App.scss";

import MyTextInput from "./MyTextInput"


export default observer (function RegisterForm(){
    const {userStore} = useStore();
    return <Formik
                initialValues={{username: '',email:'',nrLeternjofimit : '', password: '',error:null}}
                onSubmit={(values, {setErrors}) => userStore.register(values).catch(error =>
                    setErrors({error:"Ploteso te dhenat sakte!."}))} 
                >
            {({handleSubmit,errors}) => (
                <div id="formaRegister">
                <Form className='ui form loginForm' onSubmit={handleSubmit} autoComplete='off'>
                    <h3 className="text-info text-center">Regjistrohu</h3>
                    {/* <Label class="labelRegister text-info labelsR" for="username">Username:</Label> */}
                    <p className="text-info">Username:</p>
                    <MyTextInput  pattern="[A-Za-z0-9]+" name='username' placeholder='Username' required />
                    {/* <Label class="labelRegister text-info labelsR"  for="email">Email:</Label> */}
                    <p className="text-info">Email:</p>
                    <MyTextInput type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name='email' placeholder='Email' required/>
                    {/* <Label class="labelRegister text-info labelsR"  for="nrLeternjoftimit">Numri i Leternjoftimit:</Label> */}
                    <p className="text-info">Numri i Leternjoftimit:          (10 Numra)</p>
                    <MyTextInput type="number"  pattern="[0-9*].{10}" name='nrLeternjofimit' placeholder='Numri i Leternjoftimit' required/>
                    {/* <Label class="labelRegister text-info labelsR"  for="password">Password:</Label> */}
                    <p className="text-info">Password: (8-12 Karaktere)</p>
                    <MyTextInput pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"  name='password' placeholder='Password' type='password' required/>
                    <ErrorMessage
                    name='error' render={() => 
                    <Label style={{marginBottom:5,color:'red',fontSize:20}} basic color='red' content={errors.error}/>}
                    /> 
                    <Button id="butonRegister" className="btn btn-info btn-md btnL" positive content='Register' type='submit' fluid />
                </Form>
                </div>
            )}


        </Formik>
          })