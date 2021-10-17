import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import Logo from '../../../images/logo2.png';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const { user, logOut, isLoading } = useAuth();
    if (isLoading) {
        return <></>;
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img width="200px" src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-center align-items-center">
                            <Nav.Link as={Link} to="/cart">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            {
                                user?.email && <>
                                    <small className="ms-4 me-2 text-danger">Hello, {user?.displayName}</small>
                                    <img width="50px" className="rounded-circle  mx-2" src={user?.photoURL} alt="" />
                                </>
                            }
                            {
                                user.email ? <Link to="/login">
                                    <button onClick={logOut} className="btn btn-danger rounded-pill">Log out</button></Link> : <Nav.Link as={Link} to="/login">
                                    <button className="btn btn-danger rounded-pill">Log in</button>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;