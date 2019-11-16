import React from 'react'
import { Card, CardBody, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarComponent = props => {
    return (
        <Card>
            <CardBody>
                <Nav>
                    <NavItem active={true}>
                        <NavLink href="#">Overview</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Assesment</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">KUK</NavLink>
                    </NavItem>
                </Nav>
            </CardBody>
        </Card>
    )
}

export default NavbarComponent
