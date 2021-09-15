import { Formik } from "formik"
import UserStore, { useStore } from "../users/userStore"
import { observer } from "mobx-react"
import { Button, Form } from "semantic-ui-react"

import MyTextInput from "./MyTextInput"
const {userStore} = useStore();

export default observer (function RegisterForm(){

    return <Formik
                initialValues={{username: '',email:'',nrLeternjoftimit : '', password: ''}}
                onSubmit={values => userStore.register(values)} 
                >
            {({handleSubmit}) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name='username' placeholder='Username' />
                    <MyTextInput name='email' placeholder='Email' />
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