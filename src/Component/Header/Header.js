import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Header.css";
import forklift from "../../../src/images/forklift.png"


const Header = () => {
    return (
        <Navbar className='py-0 nav-bg sticky-top' expand="lg">
            <Container>
                <Navbar.Brand className='my-0 py-0'><Link className='text-decoration-none text-color nav-brand fw-bold' to="/"> <img style={{ height: "70px" }} src={forklift} alt="" /> DEPOT</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none text-color fw-bold me-3' to="/manageItems">Manage Items</Link>
                        <Link className='text-decoration-none text-color fw-bold me-3' to="/addItem">Add Item</Link>
                        <Link className='text-decoration-none text-color fw-bold me-3' to="/blogs">Blogs</Link>
                        <Link className='text-decoration-none text-color fw-bold me-3' to="/myItems">My Items</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;