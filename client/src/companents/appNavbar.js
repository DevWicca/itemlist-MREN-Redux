import React, { Component } from 'react';
import RegisterModal from "./auth/RegisterModal";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'


class AppNavbar extends Component {
   state = {
            isOpen: false
          };
        
    
    toggle =()=>{
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      render() {
          return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href='/'>Buy this</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                <RegisterModal/>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
          )
       
      }
}

export default AppNavbar