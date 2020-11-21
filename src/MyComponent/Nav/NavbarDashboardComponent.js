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
        <div col="6" class="mb-3 mb-xl-0 col-sm-4 col-md-2 col-xl">
            <button class="btn btn-outline-primary btn-block">Primary</button>
        </div>
        // <Card style={{ overflowY: 'auto', Width: '200px' }}>
        //     <CardBody >
        //         <Nav >
        //             <Link to="/dashboard" style={Overview}>
        //                 <NavLink >Masa Kerja</NavLink>
        //             </Link>
        //             <Link to="/assessmen" style={Assesment}>
        //                 <NavLink>Pendidikan</NavLink>
        //             </Link>
        //             <Link to="/kuk" style={KUK}>
        //                 <NavLink>Status Pegawai</NavLink>
        //             </Link>
        //             <Link to="/kuk" style={KUK}>
        //                 <NavLink>BOD Group </NavLink>
        //             </Link>
        //             <Link to="/kuk" style={KUK}>
        //                 <NavLink>Assesment </NavLink>
        //             </Link>
        //             <Link to="/kuk" style={KUK}>
        //                 <NavLink>Unit Kerja </NavLink>
        //             </Link>
        //             <Link to="/kuk" style={KUK}>
        //                 <NavLink>Proyek</NavLink>
        //             </Link>
        //             <Link to="/kuk" style={KUK}>
        //                 <NavLink>MBTI</NavLink>
        //             </Link>
        //         </Nav>
        //     </CardBody>
        // </Card >
    )
}

export default NavbarComponent
