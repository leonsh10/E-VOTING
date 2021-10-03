import { Formik } from "formik"
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
                initialValues={{username: '',email:'',nrLeternjofimit : '', password: ''}}
                onSubmit={values => userStore.register(values)} 
                >
            {({handleSubmit}) => (
                <div id="formaRegister">
                <Form className='ui form loginForm' onSubmit={handleSubmit} autoComplete='off'>
                    <h3 className="text-info text-center">Regjistrohu</h3>
                    {/* <Label class="labelRegister text-info labelsR" for="username">Username:</Label> */}
                    <p className="text-info">Username:</p>
                    <MyTextInput  name='username' placeholder='' />
                    {/* <Label class="labelRegister text-info labelsR"  for="email">Email:</Label> */}
                    <p className="text-info">Email:</p>
                    <MyTextInput name='email' placeholder='' />
                    {/* <Label class="labelRegister text-info labelsR"  for="nrLeternjoftimit">Numri i Leternjoftimit:</Label> */}
                    <p className="text-info">Numri i Leternjoftimit:</p>
                    <MyTextInput name='nrLeternjofimit' placeholder='' />
                    {/* <Label class="labelRegister text-info labelsR"  for="password">Password:</Label> */}
                    <p className="text-info">Password:</p>
                    <MyTextInput name='password' placeholder='' type='password' />
                    {/* <ErrorMessage
                    name='error' render={() => 
                    <Label style={{marginBottom:10}} basic color='red' content={errors.error}/>}
                    /> */}
                    <Button id="butonRegister" className="btn btn-info btn-md btnL" positive content='Register' type='submit' fluid />
                </Form>
                </div>
            )}


        </Formik>
          })