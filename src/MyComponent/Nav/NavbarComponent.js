import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarComponent = props => {
    return (
        <Card>
            <CardBody>
                <Nav>
                    <Link to="/">
                        <NavLink >Overview</NavLink>
                    </Link>
                    <Link to="/assessmen">
                        <NavLink>Assesment</NavLink>
                    </Link>
                    <Link to="/kuk">
                        <NavLink>KUK</NavLink>
                    </Link>
                </Nav>
            </CardBody>
        </Card>
    )
}

export default NavbarComponent
