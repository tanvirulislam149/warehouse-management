import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
    return (
        <Navbar className='py-2 bg-white sticky-top' expand="lg">
            <Container>
                <Navbar.Brand href="#home"><Link className='text-decoration-none text-dark fw-bold' to="/"> <img style={{ height: "40px" }} src="https://cdn.iconscout.com/icon/premium/png-256-thumb/forklift-3025675-2518745.png" alt="" /> Depot</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none text-dark fw-bold me-3' to="/blogs">Blogs</Link>
                        <Link className='text-decoration-none text-dark fw-bold me-3' to="/myItems">My Items</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;