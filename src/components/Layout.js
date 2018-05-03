import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container} from 'reactstrap';


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Container>
                <Navbar color="light" blue="true" expand="md">
                    <NavbarBrand href="/">HOME</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href='/courses'> Courses</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/companies'>Companies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/lecturers'>Lecturers</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/interns'>Interns</NavLink>
                                </NavItem>
                            </Nav>
                    </Collapse>
                </Navbar>
                </Container>
            </div>
        );
    }
}