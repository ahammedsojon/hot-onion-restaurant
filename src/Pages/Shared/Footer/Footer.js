import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer bg-dark">
            <Container>

                <Row>
                    <Col xs={12} md={6}>
                        <img width="200px" src={logo} alt="" />
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={6}>
                                <Link to="">About online food</Link>
                                <Link to="">Read our blog</Link>
                                <Link to="">Sign up to deliver</Link>
                                <Link to="">Add your restaurant</Link>
                            </Col>
                            <Col md={6}>
                                <Link to="">Get help</Link>
                                <Link to="">Read FAQs</Link>
                                <Link to="">View all cities</Link>
                                <Link to="">Restaurants near me</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs={12} md={7}>
                        <p className="text-muted">Copyright &copy; online food</p>
                    </Col>
                    <Col xs={12} md={5} className="d-flex justify-content-around">
                        <Link to="">Privacy Policy</Link>
                        <Link to="">Terms of use</Link>
                        <Link to="">Pricing</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;