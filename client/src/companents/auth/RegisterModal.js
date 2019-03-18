import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink
}from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class RegisterModal extends Component {
    state ={
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    }
    toggle =() =>{
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    
    onSubmit = e => {
        e.preventDefault()
        


        // Close Modal
        this.toggle()
    }

    render () {
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">
                Register
                </NavLink>

                <Modal 
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                    <Label for='name'>Name</Label>
                        <Input type = 'name' name='name' id='name' placeholder='Name' onChange={this.onChange}/>
                    <Label for='email'>email</Label>
                        <Input type = 'email' name='email' id='email' placeholder='Email' onChange={this.onChange}/>
                    <Label for='password'>password</Label>
                        <Input type = 'password' name='password' id='password' placeholder='password' onChange={this.onChange}/>
                        <Button
                         color='dark'
                         style={{marginTop:'2rem'}}
                         block    
                        >Register</Button>
                    </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps =state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error:state.error
})

export default connect(mapStateToProps,{  })(RegisterModal)