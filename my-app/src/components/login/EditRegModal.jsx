import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditRegModal extends Component{
    constructor(props){
        super(props);
        this.state={regs:[], editModalShow:false};
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/Register')
        .then(response=>response.json())
        .then(data=>{
            this.setState({regs:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/Register',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                votuesi_id: event.target.votuesi_id.value,
                username: event.target.username.value,
                nrLeternjoftimit: event.target.nrLeternjoftimit.value,
                email: event.target.email.value
                // Password: event.target.Password.value

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

    
    render(){
        return (
            <div className="container23">

<Modal
{...this.props}
// size="lg"
// aria-labelledby="contained-modal-title-vcenter"
// centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit User
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        {/* <Row>
            <Col sm={6}> */}
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="votuesi_id">
                        <Form.Label>Id Votuesi</Form.Label>
                        <Form.Control type="text" name="votuesi_id" 
                        placeholder="votuesi_id"
                        disabled
                        defaultValue={this.props.votuesi_id}/>
                        
                    </Form.Group>

                    <Form.Group controlId="username">
                        <Form.Label>username</Form.Label>
                        <Form.Control type="text" name="username" required 
                        defaultValue={this.props.username}
                        placeholder="Username"/>
                    </Form.Group>
                    <Form.Group controlId="nrLeternjoftimit">
                        <Form.Label>Numri Leternjoftimit</Form.Label>
                        <Form.Control type="text" name="nrLeternjoftimit" required 
                        defaultValue={this.props.nrLeternjoftimit}
                        placeholder="Numri Leternjoftimit"/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" required 
                        defaultValue={this.props.email}
                        placeholder="Email"/>
                    </Form.Group>
                   
                

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update User
                        </Button>
                    </Form.Group>
                </Form>
            {/* </Col>

        </Row> */}
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}