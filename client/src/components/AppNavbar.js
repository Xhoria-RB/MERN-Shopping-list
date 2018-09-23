import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/Xhoria-RB">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
/**
 * class AppNavbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
    //this.toggle = this.toggle.bind(this);
    //In React components in a class, we have lifecycle methods like render, componenWillMount etc. So 'this' is available there
    //And pertains to the class, but when we have a custom fuction that function isn't automatically included so it needs to be
    //binded to that function and we can do that in the constructor. But as a work around we can simply use an arrow funct
    //To that function to avoid binding.
  
    toogle = () =>{
    }
  }
};
 */

export default AppNavbar;
