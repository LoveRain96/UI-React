import  React from 'react';
import  {Link} from 'react-router-dom';
import  {
    Nav,
    NavItem,
    Container,
    NavLink,
    Button} from 'reactstrap'

export default class HeaderTest extends React.Component{

    render() {
        return (
                <Container>
                    <Nav>
                        <NavItem>
                            <NavLink href='/'> Home </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/courses'> Course</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/companies'>Companies</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
        )
    }
}