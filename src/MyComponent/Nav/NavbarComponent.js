import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Nav, NavLink } from 'reactstrap';

const NavbarComponent = props => {

    let Overview
    let Assesment
    let KUK
    let pathname = window.location.href

    if (pathname.includes('dashboard')) {
        Overview = {
            backgroundColor: '#20a8d8',
            color: '#fff'
        }

    } else if (pathname.includes('assessmen')) {
        Assesment = {
            backgroundColor: '#20a8d8',
            color: '#fff'
        }
    } else if (pathname.includes('kuk')) {
        KUK = {
            backgroundColor: '#20a8d8',
            color: '#fff'
        }
    }

    return (
        <Card>
            <CardBody>
                <Nav>
                    <Link to="/dashboard" style={Overview}>
                        <NavLink >Overview</NavLink>
                    </Link>
                    <Link to="/assessmen" style={Assesment}>
                        <NavLink>Assesment</NavLink>
                    </Link>
                    <Link to="/kuk" style={KUK}>
                        <NavLink>KUK</NavLink>
                    </Link>
                    <Link to="/kuk" style={KUK}>
                        <NavLink>Posisi Pegawai</NavLink>
                    </Link>
                    <Link to="/kuk" style={KUK}>
                        <NavLink>MBTI</NavLink>
                    </Link>
                    <Link to="/kuk" style={KUK}>
                        <NavLink>Dashboard</NavLink>
                    </Link>
                </Nav>
            </CardBody>
        </Card>
    )
}

export default NavbarComponent
