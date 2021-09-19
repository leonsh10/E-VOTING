import { Formik } from "formik"
import { useStore } from "../users/store"
import { observer } from "mobx-react"
import { Form } from "semantic-ui-react"
import {Button,Label} from "semantic-ui-react"
import "./register.scss";

import MyTextInput from "./MyTextInput"


export default observer (function RegisterForm(){
    const {userStore} = useStore();
    return <Formik
                initialValues={{username: '',email:'',nrLeternjoftimit : '', password: ''}}
                onSubmit={values => userStore.register(values)} 
                >
            {({handleSubmit}) => (
                <div id="formaRegister">
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <h3>Forma E Regjistrimit</h3>
                    <Label class="labelRegister" for="username">Username</Label>
                    <MyTextInput  name='username' placeholder='Username' />
                    <Label class="labelRegister"  for="email">Email</Label>
                    <MyTextInput name='email' placeholder='Email' />
                    <Label class="labelRegister"  for="nrLeternjoftimit">Numri i Leternjoftimit</Label>
                    <MyTextInput name='nrLeternjoftimit' placeholder='NrLeternjoftimit' />
                    <Label class="labelRegister"  for="password">Password</Label>
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    {/* <ErrorMessage
                    name='error' render={() => 
                    <Label style={{marginBottom:10}} basic color='red' content={errors.error}/>}
                    /> */}
                    <Button id="butonRegister" positive content='Register' type='submit' fluid />
                </Form>
                </div>
            )}


        </Formik>
          })